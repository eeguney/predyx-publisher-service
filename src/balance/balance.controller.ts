import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { Request, Response } from 'express';
import BalanceType from 'src/types/balance.type';

@Controller("balance")
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) { }

  @Post()
  async balanceControl(@Body() body: BalanceType, @Req() req: Request, @Res() res: Response): Promise<Object> {
    await this.balanceService.balanceControl(body, req, res);
    return { success: true, message: 'Message sent to RabbitMQ' };
  }
}
