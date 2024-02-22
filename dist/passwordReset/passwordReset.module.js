"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordResetModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
const passwordReset_service_1 = require("./passwordReset.service");
const passwordReset_controller_1 = require("./passwordReset.controller");
const passwordReset_config_1 = require("../config/passwordReset.config");
let PasswordResetModule = class PasswordResetModule {
};
exports.PasswordResetModule = PasswordResetModule;
exports.PasswordResetModule = PasswordResetModule = __decorate([
    (0, common_1.Module)({
        providers: [passwordReset_service_1.PasswordResetService, app_service_1.AppService, passwordReset_config_1.default],
        exports: [passwordReset_service_1.PasswordResetService],
        controllers: [passwordReset_controller_1.PasswordResetController]
    })
], PasswordResetModule);
//# sourceMappingURL=passwordReset.module.js.map