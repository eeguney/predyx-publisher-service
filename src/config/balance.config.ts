import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

@Injectable()
export default class BalanceConfig {
    constructor(private readonly configService: ConfigService) {}
    QUEUE = this.configService.get('BALANCE_QUEUE')

    ROUTE = this.configService.get('BALANCE_ROUTING_KEY')

    EXCHANGE = this.configService.get('BALANCE_EXCHANGE')
}