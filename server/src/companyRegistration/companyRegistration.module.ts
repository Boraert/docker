import { Module } from "@nestjs/common";
import { CompanyRegistrationModuleBase } from "./base/companyRegistration.module.base";
import { CompanyRegistrationService } from "./companyRegistration.service";
import { CompanyRegistrationController } from "./companyRegistration.controller";
import { CompanyRegistrationResolver } from "./companyRegistration.resolver";

@Module({
  imports: [CompanyRegistrationModuleBase],
  controllers: [CompanyRegistrationController],
  providers: [CompanyRegistrationService, CompanyRegistrationResolver],
  exports: [CompanyRegistrationService],
})
export class CompanyRegistrationModule {}
