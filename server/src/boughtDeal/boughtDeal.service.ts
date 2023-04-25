import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BoughtDealServiceBase } from "./base/boughtDeal.service.base";

@Injectable()
export class BoughtDealService extends BoughtDealServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
