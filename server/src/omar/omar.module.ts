import { Module } from "@nestjs/common";
import { OmarModuleBase } from "./base/omar.module.base";
import { OmarService } from "./omar.service";
import { OmarController } from "./omar.controller";
import { OmarResolver } from "./omar.resolver";

@Module({
  imports: [OmarModuleBase],
  controllers: [OmarController],
  providers: [OmarService, OmarResolver],
  exports: [OmarService],
})
export class OmarModule {}
