import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import EmailValidationConfig from 'src/config/emailValidation.config';
import MessageType from 'src/types/message.type';

@Injectable()
export class EmailValidationService {
  constructor(
    private readonly appService: AppService,
    private readonly emailValidationConfig: EmailValidationConfig
  ) { }

  async newEmailValidation(emailValidationKey: string, body: MessageType) {
    try {
      await this.initializeAndPublish({ emailValidationKey: emailValidationKey, template: body.template, emailAdress: body.emailAdress });
    } catch (error) {
      console.log(error)
    }
  }

  private async initializeAndPublish(emailValidation) {
    try {
      await this.appService.init();
      const channel = this.appService.getChannel();

      await this.assertExchangeAndQueue(channel);
      channel.publish(this.emailValidationConfig.EXCHANGE, this.emailValidationConfig.ROUTE, Buffer.from(JSON.stringify(emailValidation)));
    } catch (error) {
      console.log(error)

    }
  }

  private async assertExchangeAndQueue(channel: any) {
    try {
      await channel.assertExchange(this.emailValidationConfig.EXCHANGE, 'direct', { durable: true });
      await channel.assertQueue(this.emailValidationConfig.QUEUE, { durable: true });
      await channel.bindQueue(this.emailValidationConfig.QUEUE, this.emailValidationConfig.EXCHANGE, this.emailValidationConfig.ROUTE);
    } catch (error) {
      console.log(error)
    }
  }
}

