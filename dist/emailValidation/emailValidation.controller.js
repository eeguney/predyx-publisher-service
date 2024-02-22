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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidationController = void 0;
const common_1 = require("@nestjs/common");
const emailValidation_service_1 = require("./emailValidation.service");
let EmailValidationController = class EmailValidationController {
    constructor(emailValidationService) {
        this.emailValidationService = emailValidationService;
    }
    async newEmailValidation(emailValidationKey, body) {
        await this.emailValidationService.newEmailValidation(emailValidationKey, body);
        return { success: true, message: 'Message sent to RabbitMQ' };
    }
};
exports.EmailValidationController = EmailValidationController;
__decorate([
    (0, common_1.Post)("/:emailValidationKey"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EmailValidationController.prototype, "newEmailValidation", null);
exports.EmailValidationController = EmailValidationController = __decorate([
    (0, common_1.Controller)("email-validation"),
    __metadata("design:paramtypes", [emailValidation_service_1.EmailValidationService])
], EmailValidationController);
//# sourceMappingURL=emailValidation.controller.js.map