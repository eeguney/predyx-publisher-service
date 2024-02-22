import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import NotificationConfig from 'src/config/notification.config';
import NotificationType from 'src/types/notification.type';

@Injectable()
export class NotificationService {
  constructor(
    private readonly appService: AppService,
    private readonly notificationConfig: NotificationConfig
  ) { }

  async newNotification(notification: NotificationType) {
    try {
      await this.initializeAndPublish(notification);
    } catch (error) {
      console.log(error)
    }
  }

  private async initializeAndPublish(notification: NotificationType) {
    try {
      await this.appService.init();
      const channel = this.appService.getChannel();

      await this.assertExchangeAndQueue(channel);

      channel.publish(this.notificationConfig.EXCHANGE, this.notificationConfig.ROUTE, Buffer.from(JSON.stringify(notification)));
    } catch (error) {
      console.log(error)
    }
  }

  private async assertExchangeAndQueue(channel: any) {
    try {
      await channel.assertExchange(this.notificationConfig.EXCHANGE, 'direct', { durable: true });
      await channel.assertQueue(this.notificationConfig.QUEUE, { durable: true });
      await channel.bindQueue(this.notificationConfig.QUEUE, this.notificationConfig.EXCHANGE, this.notificationConfig.ROUTE);
    } catch (error) {
      console.log(error)
    }
  }
}

