import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

@Injectable()
export default class PaymentConfig {
    constructor(private readonly configService: ConfigService) {}
    QUEUE = this.configService.get('PAYMENT_QUEUE')

    ROUTE = this.configService.get('PAYMENT_ROUTING_KEY')

    EXCHANGE = this.configService.get('PAYMENT_EXCHANGE')
}