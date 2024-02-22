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
const common_1 = require("@nestjs/common");
const config_service_1 = require("./config.service");
let BalanceConfig = class BalanceConfig {
    constructor(configService) {
        this.configService = configService;
        this.QUEUE = this.configService.get('BALANCE_QUEUE');
        this.ROUTE = this.configService.get('BALANCE_ROUTING_KEY');
        this.EXCHANGE = this.configService.get('BALANCE_EXCHANGE');
    }
};
BalanceConfig = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], BalanceConfig);
exports.default = BalanceConfig;
//# sourceMappingURL=balance.config.js.map