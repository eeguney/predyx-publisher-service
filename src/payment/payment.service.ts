import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import PaymentConfig from 'src/config/payment.config';
import MessageType from './message.type';

@Injectable()
export class PaymentService {
  constructor(
    private readonly appService: AppService,
    private readonly paymentConfig: PaymentConfig
  ) { }

  async sendMessage(message: MessageType) {
    try {
      await this.initializeAndPublish(message);
    } catch (error) {
      console.log(error)
    }
  }

  private async initializeAndPublish(message: MessageType) {
    try {
      await this.appService.init();
      const channel = this.appService.getChannel();

      await this.assertExchangeAndQueue(channel);

      channel.publish(this.paymentConfig.EXCHANGE, this.paymentConfig.ROUTE, Buffer.from(JSON.stringify(message)));
    } catch (error) {
      console.log(error)
    }
  }

  private async assertExchangeAndQueue(channel: any) {
    try {
      await channel.assertExchange(this.paymentConfig.EXCHANGE, 'direct', { durable: true });
      await channel.assertQueue(this.paymentConfig.QUEUE, { durable: true });
      await channel.bindQueue(this.paymentConfig.QUEUE, this.paymentConfig.EXCHANGE, this.paymentConfig.ROUTE);
    } catch (error) {
      console.log(error)
    }
  }
}

