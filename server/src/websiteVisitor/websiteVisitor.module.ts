import { Module } from "@nestjs/common";
import { WebsiteVisitorModuleBase } from "./base/websiteVisitor.module.base";
import { WebsiteVisitorService } from "./websiteVisitor.service";
import { WebsiteVisitorController } from "./websiteVisitor.controller";
import { WebsiteVisitorResolver } from "./websiteVisitor.resolver";

@Module({
  imports: [WebsiteVisitorModuleBase],
  controllers: [WebsiteVisitorController],
  providers: [WebsiteVisitorService, WebsiteVisitorResolver],
  exports: [WebsiteVisitorService],
})
export class WebsiteVisitorModule {}
