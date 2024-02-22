import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

@Injectable()
export default class NotificationConfig {
    constructor(private readonly configService: ConfigService) {}
    QUEUE = this.configService.get('NOTIFICATION_QUEUE')

    ROUTE = this.configService.get('NOTIFICATION_ROUTING_KEY')

    EXCHANGE = this.configService.get('NOTIFICATION_EXCHANGE')
}