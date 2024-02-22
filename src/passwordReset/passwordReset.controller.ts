import { Body, Controller, Post } from '@nestjs/common';
import { PasswordResetService } from './passwordReset.service';
import MessageType from 'src/types/message.type';

@Controller("password-reset")
export class PasswordResetController {
  constructor(private readonly passwordResetService: PasswordResetService) { }

  @Post()
  async newPasswordReset(@Body() body: MessageType): Promise<Object> {
    await this.passwordResetService.passwordReset(body);
    return { success: true, message: 'Message sent to RabbitMQ' };
  }
}
