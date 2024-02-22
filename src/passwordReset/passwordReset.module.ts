import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { PasswordResetService } from './passwordReset.service';
import { PasswordResetController } from './passwordReset.controller';
import PasswordResetConfig from 'src/config/passwordReset.config';

@Module({
    providers: [PasswordResetService, AppService, PasswordResetConfig],
    exports: [PasswordResetService],
    controllers: [PasswordResetController]
  })
  export class PasswordResetModule {}