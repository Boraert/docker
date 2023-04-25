import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BoughtDealResolverBase } from "./base/boughtDeal.resolver.base";
import { BoughtDeal } from "./base/BoughtDeal";
import { BoughtDealService } from "./boughtDeal.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BoughtDeal)
export class BoughtDealResolver extends BoughtDealResolverBase {
  constructor(
    protected readonly service: BoughtDealService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
