import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WebsiteVisitorResolverBase } from "./base/websiteVisitor.resolver.base";
import { WebsiteVisitor } from "./base/WebsiteVisitor";
import { WebsiteVisitorService } from "./websiteVisitor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WebsiteVisitor)
export class WebsiteVisitorResolver extends WebsiteVisitorResolverBase {
  constructor(
    protected readonly service: WebsiteVisitorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
