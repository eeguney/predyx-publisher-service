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
exports.EmailValidationService = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
const emailValidation_config_1 = require("../config/emailValidation.config");
let EmailValidationService = class EmailValidationService {
    constructor(appService, emailValidationConfig) {
        this.appService = appService;
        this.emailValidationConfig = emailValidationConfig;
    }
    async newEmailValidation(emailValidationKey, body) {
        try {
            await this.initializeAndPublish({ emailValidationKey: emailValidationKey, template: body.template, emailAdress: body.emailAdress });
        }
        catch (error) {
            console.log(error);
        }
    }
    async initializeAndPublish(emailValidation) {
        try {
            await this.appService.init();
            const channel = this.appService.getChannel();
            await this.assertExchangeAndQueue(channel);
            channel.publish(this.emailValidationConfig.EXCHANGE, this.emailValidationConfig.ROUTE, Buffer.from(JSON.stringify(emailValidation)));
        }
        catch (error) {
            console.log(error);
        }
    }
    async assertExchangeAndQueue(channel) {
        try {
            await channel.assertExchange(this.emailValidationConfig.EXCHANGE, 'direct', { durable: true });
            await channel.assertQueue(this.emailValidationConfig.QUEUE, { durable: true });
            await channel.bindQueue(this.emailValidationConfig.QUEUE, this.emailValidationConfig.EXCHANGE, this.emailValidationConfig.ROUTE);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.EmailValidationService = EmailValidationService;
exports.EmailValidationService = EmailValidationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        emailValidation_config_1.default])
], EmailValidationService);
//# sourceMappingURL=emailValidation.service.js.map