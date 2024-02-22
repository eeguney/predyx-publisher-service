import { Global, Module } from '@nestjs/common';

import { ConfigService } from './config.service';
import PaymentConfig from './payment.config';
import NotificationConfig from './notification.config';

@Global()
@Module({
    providers: [
        {
            provide: ConfigService,
            useValue: new ConfigService(),
        },
        PaymentConfig,
        NotificationConfig
    ],
    exports: [ConfigService, PaymentConfig, NotificationConfig],
})
export class ConfigModule {}