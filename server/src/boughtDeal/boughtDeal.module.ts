import { Module } from "@nestjs/common";
import { BoughtDealModuleBase } from "./base/boughtDeal.module.base";
import { BoughtDealService } from "./boughtDeal.service";
import { BoughtDealController } from "./boughtDeal.controller";
import { BoughtDealResolver } from "./boughtDeal.resolver";

@Module({
  imports: [BoughtDealModuleBase],
  controllers: [BoughtDealController],
  providers: [BoughtDealService, BoughtDealResolver],
  exports: [BoughtDealService],
})
export class BoughtDealModule {}
