import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompanyRegistrationServiceBase } from "./base/companyRegistration.service.base";

@Injectable()
export class CompanyRegistrationService extends CompanyRegistrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
