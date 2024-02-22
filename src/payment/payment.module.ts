import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { AppService } from 'src/app.service';
import { PaymentController } from './payment.controller';
import PaymentConfig from 'src/config/payment.config';

@Module({
    providers: [PaymentService, AppService, PaymentConfig],
    exports: [PaymentService],
    controllers: [PaymentController]
  })
  export class PaymentModule {}