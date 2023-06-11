import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CompanyRegistrationResolverBase } from "./base/companyRegistration.resolver.base";
import { CompanyRegistration } from "./base/CompanyRegistration";
import { CompanyRegistrationService } from "./companyRegistration.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CompanyRegistration)
export class CompanyRegistrationResolver extends CompanyRegistrationResolverBase {
  constructor(
    protected readonly service: CompanyRegistrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
