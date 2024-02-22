"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_service_1 = require("./config/config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const config = new config_service_1.ConfigService();
    app.setGlobalPrefix(config.get('GLOBAL_PREFIX'));
    await app.listen(config.get('API_PORT') ?? 9999);
}
bootstrap();
//# sourceMappingURL=main.js.map