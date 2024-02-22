import { ConfigService } from './config.service';
export default class EmailValidationConfig {
    private readonly configService;
    constructor(configService: ConfigService);
    QUEUE: string;
    ROUTE: string;
    EXCHANGE: string;
}
