import { BalanceService } from './balance.service';
import { Request, Response } from 'express';
import BalanceType from 'src/types/balance.type';
export declare class BalanceController {
    private readonly balanceService;
    constructor(balanceService: BalanceService);
    balanceControl(body: BalanceType, req: Request, res: Response): Promise<Object>;
}
