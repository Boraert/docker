import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WebsiteVisitorService } from "./websiteVisitor.service";
import { WebsiteVisitorControllerBase } from "./base/websiteVisitor.controller.base";

@swagger.ApiTags("websiteVisitors")
@common.Controller("websiteVisitors")
export class WebsiteVisitorController extends WebsiteVisitorControllerBase {
  constructor(
    protected readonly service: WebsiteVisitorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
