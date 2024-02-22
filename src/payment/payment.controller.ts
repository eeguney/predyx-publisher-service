import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import MessageType from './message.type';

@Controller("payment")
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Post()
  async sendMessage(@Body() body: MessageType): Promise<Object> {
    await this.paymentService.sendMessage(body);
    return { success: true, message: 'Message sent to RabbitMQ' };
  }
}
