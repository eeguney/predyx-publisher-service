import { HttpStatus, Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import balanceConfig from 'src/config/balance.config';
import Axios, { AxiosHeaders, AxiosRequestHeaders, HttpStatusCode } from 'axios';
import { ConfigService } from 'src/config/config.service';
import { Request, Response } from 'express';
import BalanceType from 'src/types/balance.type';

type BalanceProcessDataType = {
  balance: BalanceType,
  headers: any
}

@Injectable()
export class BalanceService {
  constructor(
    private readonly appService: AppService,
    private readonly balanceConfig: balanceConfig,
    private readonly configService: ConfigService
  ) { }

  async balanceControl(balance: BalanceType, req: Request, res: Response) {
    try {
      const isAuthenticated = await this.checkAuthentication(req)
      if (!isAuthenticated) {
        return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Unauthorized request!' })
      }
      const balanceProcessData = { balance, headers: req.headers }
      await this.initializeAndPublish(balanceProcessData);
      return res.status(HttpStatus.OK).json({ message: 'Sent the queue.' })
    } catch (error) {
      console.log(error)
    }
  }

  private async initializeAndPublish(balance: BalanceProcessDataType) {
    try {
      await this.appService.init();
      const channel = this.appService.getChannel();

      await this.assertExchangeAndQueue(channel);

      channel.publish(this.balanceConfig.EXCHANGE, this.balanceConfig.ROUTE, Buffer.from(JSON.stringify(balance)));
    } catch (error) {
      console.log(error)
    }
  }

  private async assertExchangeAndQueue(channel: any) {
    try {
      await channel.assertExchange(this.balanceConfig.EXCHANGE, 'direct', { durable: true });
      await channel.assertQueue(this.balanceConfig.QUEUE, { durable: true });
      await channel.bindQueue(this.balanceConfig.QUEUE, this.balanceConfig.EXCHANGE, this.balanceConfig.ROUTE);
    } catch (error) {
      console.log(error)
    }
  }

  private async checkAuthentication(req: Request) {
    const credentials = req.headers;


    if (credentials.consumerpass) {
      if (credentials.consumerpass !== this.configService.get('CONSUMER_AUTH_PASS')) {
        return false;
      } else {
        return true
      }
    }

    const checkAuthenticated = await Axios.get(`${this.configService.get('AUTH_API_URL')}/me`, { headers: { cookie: credentials.cookie, Authorization: credentials.authorization } });
    if (checkAuthenticated.data._id === req.body.userId) {
      return true;
    }
    return false;
  }

}

