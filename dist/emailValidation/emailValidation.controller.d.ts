import { EmailValidationService } from './emailValidation.service';
import MessageType from 'src/types/message.type';
export declare class EmailValidationController {
    private readonly emailValidationService;
    constructor(emailValidationService: EmailValidationService);
    newEmailValidation(emailValidationKey: string, body: MessageType): Promise<Object>;
}
