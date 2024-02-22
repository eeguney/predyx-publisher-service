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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
const notification_config_1 = require("../config/notification.config");
let NotificationService = class NotificationService {
    constructor(appService, notificationConfig) {
        this.appService = appService;
        this.notificationConfig = notificationConfig;
    }
    async newNotification(notification) {
        try {
            await this.initializeAndPublish(notification);
        }
        catch (error) {
            console.log(error);
        }
    }
    async initializeAndPublish(notification) {
        try {
            await this.appService.init();
            const channel = this.appService.getChannel();
            await this.assertExchangeAndQueue(channel);
            channel.publish(this.notificationConfig.EXCHANGE, this.notificationConfig.ROUTE, Buffer.from(JSON.stringify(notification)));
        }
        catch (error) {
            console.log(error);
        }
    }
    async assertExchangeAndQueue(channel) {
        try {
            await channel.assertExchange(this.notificationConfig.EXCHANGE, 'direct', { durable: true });
            await channel.assertQueue(this.notificationConfig.QUEUE, { durable: true });
            await channel.bindQueue(this.notificationConfig.QUEUE, this.notificationConfig.EXCHANGE, this.notificationConfig.ROUTE);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        notification_config_1.default])
], NotificationService);
//# sourceMappingURL=notification.service.js.map