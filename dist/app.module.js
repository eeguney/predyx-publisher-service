"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const payment_module_1 = require("./payment/payment.module");
const config_module_1 = require("./config/config.module");
const notification_module_1 = require("./notification/notification.module");
const emailValidation_module_1 = require("./emailValidation/emailValidation.module");
const passwordReset_module_1 = require("./passwordReset/passwordReset.module");
const balance_module_1 = require("./balance/balance.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_module_1.ConfigModule, payment_module_1.PaymentModule, balance_module_1.BalanceModule, notification_module_1.NotificationModule, emailValidation_module_1.EmailValidationModule, passwordReset_module_1.PasswordResetModule],
        providers: [app_service_1.AppService],
        exports: [app_service_1.AppService]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map