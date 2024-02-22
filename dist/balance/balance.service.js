"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceService = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
const balance_config_1 = require("../config/balance.config");
const axios_1 = require("axios");
const config_service_1 = require("../config/config.service");
let BalanceService = class BalanceService {
    constructor(appService, balanceConfig, configService) {
        this.appService = appService;
        this.balanceConfig = balanceConfig;
        this.configService = configService;
    }
    async balanceControl(balance, req, res) {
        try {
            const isAuthenticated = await this.checkAuthentication(req);
            if (!isAuthenticated) {
                return res.status(common_1.HttpStatus.UNAUTHORIZED).json({ message: 'Unauthorized request!' });
            }
            const balanceProcessData = { balance, headers: req.headers };
            await this.initializeAndPublish(balanceProcessData);
            return res.status(common_1.HttpStatus.OK).json({ message: 'Sent the queue.' });
        }
        catch (error) {
            console.log(error);
        }
    }
    async initializeAndPublish(balance) {
        try {
            await this.appService.init();
            const channel = this.appService.getChannel();
            await this.assertExchangeAndQueue(channel);
            channel.publish(this.balanceConfig.EXCHANGE, this.balanceConfig.ROUTE, Buffer.from(JSON.stringify(balance)));
        }
        catch (error) {
            console.log(error);
        }
    }
    async assertExchangeAndQueue(channel) {
        try {
            await channel.assertExchange(this.balanceConfig.EXCHANGE, 'direct', { durable: true });
            await channel.assertQueue(this.balanceConfig.QUEUE, { durable: true });
            await channel.bindQueue(this.balanceConfig.QUEUE, this.balanceConfig.EXCHANGE, this.balanceConfig.ROUTE);
        }
        catch (error) {
            console.log(error);
        }
    }
    async checkAuthentication(req) {
        const credentials = req.headers;
        if (credentials.consumerpass) {
            if (credentials.consumerpass !== this.configService.get('CONSUMER_AUTH_PASS')) {
                return false;
            }
            else {
                return true;
            }
        }
        const checkAuthenticated = await axios_1.default.get(`${this.configService.get('AUTH_API_URL')}/me`, { headers: { cookie: credentials.cookie, Authorization: credentials.authorization } });
        if (checkAuthenticated.data._id === req.body.userId) {
            return true;
        }
        return false;
    }
};
exports.BalanceService = BalanceService;
exports.BalanceService = BalanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        balance_config_1.default,
        config_service_1.ConfigService])
], BalanceService);
//# sourceMappingURL=balance.service.js.map