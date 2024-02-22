import { AppService } from 'src/app.service';
import EmailValidationConfig from 'src/config/emailValidation.config';
import MessageType from 'src/types/message.type';
export declare class EmailValidationService {
    private readonly appService;
    private readonly emailValidationConfig;
    constructor(appService: AppService, emailValidationConfig: EmailValidationConfig);
    newEmailValidation(emailValidationKey: string, body: MessageType): Promise<void>;
    private initializeAndPublish;
    private assertExchangeAndQueue;
}
