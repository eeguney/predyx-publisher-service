import { PaymentService } from './payment.service';
import MessageType from './message.type';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    sendMessage(body: MessageType): Promise<Object>;
}
