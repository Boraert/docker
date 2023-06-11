import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CompanyRegistrationService } from "./companyRegistration.service";
import { CompanyRegistrationControllerBase } from "./base/companyRegistration.controller.base";

@swagger.ApiTags("companyRegistrations")
@common.Controller("companyRegistrations")
export class CompanyRegistrationController extends CompanyRegistrationControllerBase {
  constructor(
    protected readonly service: CompanyRegistrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
