import { AppService } from 'src/app.service';
import PaymentConfig from 'src/config/payment.config';
import MessageType from './message.type';
export declare class PaymentService {
    private readonly appService;
    private readonly paymentConfig;
    constructor(appService: AppService, paymentConfig: PaymentConfig);
    sendMessage(message: MessageType): Promise<void>;
    private initializeAndPublish;
    private assertExchangeAndQueue;
}
