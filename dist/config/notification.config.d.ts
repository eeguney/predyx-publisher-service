import { ConfigService } from './config.service';
export default class NotificationConfig {
    private readonly configService;
    constructor(configService: ConfigService);
    QUEUE: string;
    ROUTE: string;
    EXCHANGE: string;
}
