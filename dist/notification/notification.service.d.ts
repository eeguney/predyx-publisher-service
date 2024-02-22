import { AppService } from 'src/app.service';
import NotificationConfig from 'src/config/notification.config';
import NotificationType from 'src/types/notification.type';
export declare class NotificationService {
    private readonly appService;
    private readonly notificationConfig;
    constructor(appService: AppService, notificationConfig: NotificationConfig);
    newNotification(notification: NotificationType): Promise<void>;
    private initializeAndPublish;
    private assertExchangeAndQueue;
}
