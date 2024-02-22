import { AppService } from 'src/app.service';
import balanceConfig from 'src/config/balance.config';
import { ConfigService } from 'src/config/config.service';
import { Request, Response } from 'express';
import BalanceType from 'src/types/balance.type';
export declare class BalanceService {
    private readonly appService;
    private readonly balanceConfig;
    private readonly configService;
    constructor(appService: AppService, balanceConfig: balanceConfig, configService: ConfigService);
    balanceControl(balance: BalanceType, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    private initializeAndPublish;
    private assertExchangeAndQueue;
    private checkAuthentication;
}
