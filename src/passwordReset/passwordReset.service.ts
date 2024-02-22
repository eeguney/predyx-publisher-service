import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import PasswordResetConfig from 'src/config/passwordReset.config';
import MessageType from 'src/types/message.type';

@Injectable()
export class PasswordResetService {
  constructor(
    private readonly appService: AppService,
    private readonly passwordResetConfig: PasswordResetConfig
  ) { }

  async passwordReset(body: MessageType) {
    try {
      await this.initializeAndPublish({ template: body.template, emailAdress: body.emailAdress });
    } catch (error) {
      console.log(error)
    }
  }

  private async initializeAndPublish(passwordReset) {
    try {
      await this.appService.init();
      const channel = this.appService.getChannel();

      await this.assertExchangeAndQueue(channel);

      channel.publish(this.passwordResetConfig.EXCHANGE, this.passwordResetConfig.ROUTE, Buffer.from(JSON.stringify(passwordReset)));
    } catch (error) {
      console.log(error)
    }
  }

  private async assertExchangeAndQueue(channel: any) {
    try {
      await channel.assertExchange(this.passwordResetConfig.EXCHANGE, 'direct', { durable: true });
      await channel.assertQueue(this.passwordResetConfig.QUEUE, { durable: true });
      await channel.bindQueue(this.passwordResetConfig.QUEUE, this.passwordResetConfig.EXCHANGE, this.passwordResetConfig.ROUTE);
    } catch (error) {
      console.log(error)
    }
  }
}

