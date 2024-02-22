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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
const payment_config_1 = require("../config/payment.config");
let PaymentService = class PaymentService {
    constructor(appService, paymentConfig) {
        this.appService = appService;
        this.paymentConfig = paymentConfig;
    }
    async sendMessage(message) {
        try {
            await this.initializeAndPublish(message);
        }
        catch (error) {
            console.log(error);
        }
    }
    async initializeAndPublish(message) {
        try {
            await this.appService.init();
            const channel = this.appService.getChannel();
            await this.assertExchangeAndQueue(channel);
            channel.publish(this.paymentConfig.EXCHANGE, this.paymentConfig.ROUTE, Buffer.from(JSON.stringify(message)));
        }
        catch (error) {
            console.log(error);
        }
    }
    async assertExchangeAndQueue(channel) {
        try {
            await channel.assertExchange(this.paymentConfig.EXCHANGE, 'direct', { durable: true });
            await channel.assertQueue(this.paymentConfig.QUEUE, { durable: true });
            await channel.bindQueue(this.paymentConfig.QUEUE, this.paymentConfig.EXCHANGE, this.paymentConfig.ROUTE);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        payment_config_1.default])
], PaymentService);
//# sourceMappingURL=payment.service.js.map