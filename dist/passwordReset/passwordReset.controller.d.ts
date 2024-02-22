import { PasswordResetService } from './passwordReset.service';
import MessageType from 'src/types/message.type';
export declare class PasswordResetController {
    private readonly passwordResetService;
    constructor(passwordResetService: PasswordResetService);
    newPasswordReset(body: MessageType): Promise<Object>;
}
