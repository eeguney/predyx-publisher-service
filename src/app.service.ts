import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) { }

  private connection: amqp.Connection;
  private channel: amqp.Channel;

  async init() {
    this.connection = await amqp.connect(this.config.get('RABBITMQ_URL'));
    this.channel = await this.connection.createChannel();
  }

  getChannel(): amqp.Channel {
    return this.channel;
  }

}
