import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebsiteVisitorServiceBase } from "./base/websiteVisitor.service.base";

@Injectable()
export class WebsiteVisitorService extends WebsiteVisitorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
