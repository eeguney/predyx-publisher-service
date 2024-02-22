import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

@Injectable()
export default class EmailValidationConfig {
    constructor(private readonly configService: ConfigService) {}
    QUEUE = this.configService.get('EMAIL_VALIDATION_QUEUE')

    ROUTE = this.configService.get('EMAIL_VALIDATION_ROUTING_KEY')

    EXCHANGE = this.configService.get('EMAIL_VALIDATION_EXCHANGE')
}