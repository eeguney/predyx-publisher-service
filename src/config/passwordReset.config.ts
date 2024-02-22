import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

@Injectable()
export default class PasswordResetConfig {
    constructor(private readonly configService: ConfigService) {}
    QUEUE = this.configService.get('PASSWORD_RESET_QUEUE')

    ROUTE = this.configService.get('PASSWORD_RESET_ROUTING_KEY')

    EXCHANGE = this.configService.get('PASSWORD_RESET_EXCHANGE')
}