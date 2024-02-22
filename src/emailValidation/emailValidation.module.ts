import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { EmailValidationService } from './emailValidation.service';
import { EmailValidationController } from './emailValidation.controller';
import EmailValidationConfig from 'src/config/emailValidation.config';

@Module({
    providers: [EmailValidationService, AppService, EmailValidationConfig],
    exports: [EmailValidationService],
    controllers: [EmailValidationController]
  })
  export class EmailValidationModule {}