import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { BalanceService } from './balance.service';
import { BalanceController } from './balance.controller';
import BalanceConfig from 'src/config/balance.config';

@Module({
    providers: [BalanceService, AppService, BalanceConfig],
    exports: [BalanceService],
    controllers: [BalanceController]
  })
  export class BalanceModule {}