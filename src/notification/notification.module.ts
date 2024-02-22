import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import NotificationConfig from 'src/config/notification.config';

@Module({
    providers: [NotificationService, AppService, NotificationConfig],
    exports: [NotificationService],
    controllers: [NotificationController]
  })
  export class NotificationModule {}