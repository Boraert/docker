import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CampaignDetailResolverBase } from "./base/campaignDetail.resolver.base";
import { CampaignDetail } from "./base/CampaignDetail";
import { CampaignDetailService } from "./campaignDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CampaignDetail)
export class CampaignDetailResolver extends CampaignDetailResolverBase {
  constructor(
    protected readonly service: CampaignDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
