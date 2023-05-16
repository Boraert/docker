import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OmarServiceBase } from "./base/omar.service.base";

@Injectable()
export class OmarService extends OmarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
