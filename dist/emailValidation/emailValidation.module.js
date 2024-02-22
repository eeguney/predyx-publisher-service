"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidationModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
const emailValidation_service_1 = require("./emailValidation.service");
const emailValidation_controller_1 = require("./emailValidation.controller");
const emailValidation_config_1 = require("../config/emailValidation.config");
let EmailValidationModule = class EmailValidationModule {
};
exports.EmailValidationModule = EmailValidationModule;
exports.EmailValidationModule = EmailValidationModule = __decorate([
    (0, common_1.Module)({
        providers: [emailValidation_service_1.EmailValidationService, app_service_1.AppService, emailValidation_config_1.default],
        exports: [emailValidation_service_1.EmailValidationService],
        controllers: [emailValidation_controller_1.EmailValidationController]
    })
], EmailValidationModule);
//# sourceMappingURL=emailValidation.module.js.map