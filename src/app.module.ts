import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { ConfigModule } from 'src/config/config.module';
import { NotificationModule } from './notification/notification.module';
import { EmailValidationModule } from './emailValidation/emailValidation.module';
import { PasswordResetModule } from './passwordReset/passwordReset.module';
import { BalanceModule } from './balance/balance.module';

@Module({
  imports: [ConfigModule, PaymentModule, BalanceModule, NotificationModule, EmailValidationModule, PasswordResetModule],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule {
 
}
