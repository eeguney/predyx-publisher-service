import { NotificationService } from './notification.service';
import NotificationType from 'src/types/notification.type';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    newNotification(body: NotificationType): Promise<Object>;
}
