import { AppService } from 'src/app.service';
import PasswordResetConfig from 'src/config/passwordReset.config';
import MessageType from 'src/types/message.type';
export declare class PasswordResetService {
    private readonly appService;
    private readonly passwordResetConfig;
    constructor(appService: AppService, passwordResetConfig: PasswordResetConfig);
    passwordReset(body: MessageType): Promise<void>;
    private initializeAndPublish;
    private assertExchangeAndQueue;
}
