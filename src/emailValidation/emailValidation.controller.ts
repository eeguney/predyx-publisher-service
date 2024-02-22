import { Body, Controller, Param, Post } from '@nestjs/common';
import { EmailValidationService } from './emailValidation.service';
import MessageType from 'src/types/message.type';

@Controller("email-validation")
export class EmailValidationController {
  constructor(private readonly emailValidationService: EmailValidationService) { }

  @Post("/:emailValidationKey")
  async newEmailValidation(@Param() emailValidationKey: string, @Body() body: MessageType): Promise<Object> {
    await this.emailValidationService.newEmailValidation(emailValidationKey, body);
    return { success: true, message: 'Message sent to RabbitMQ' };
  }
}
