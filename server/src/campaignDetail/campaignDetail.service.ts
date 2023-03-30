import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CampaignDetailServiceBase } from "./base/campaignDetail.service.base";

@Injectable()
export class CampaignDetailService extends CampaignDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
