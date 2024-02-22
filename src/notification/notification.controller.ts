import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import NotificationType from 'src/types/notification.type';

@Controller("notification")
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) { }

  @Post()
  async newNotification(@Body() body: NotificationType): Promise<Object> {
    await this.notificationService.newNotification(body);
    return { success: true, message: 'Message sent to RabbitMQ' };
  }
}
