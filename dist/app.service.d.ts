import * as amqp from 'amqplib';
import { ConfigService } from 'src/config/config.service';
export declare class AppService {
    private readonly config;
    constructor(config: ConfigService);
    private connection;
    private channel;
    init(): Promise<void>;
    getChannel(): amqp.Channel;
}
