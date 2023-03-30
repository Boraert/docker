import { Module } from "@nestjs/common";
import { CampaignDetailModuleBase } from "./base/campaignDetail.module.base";
import { CampaignDetailService } from "./campaignDetail.service";
import { CampaignDetailController } from "./campaignDetail.controller";
import { CampaignDetailResolver } from "./campaignDetail.resolver";

@Module({
  imports: [CampaignDetailModuleBase],
  controllers: [CampaignDetailController],
  providers: [CampaignDetailService, CampaignDetailResolver],
  exports: [CampaignDetailService],
})
export class CampaignDetailModule {}
