import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OmarService } from "./omar.service";
import { OmarControllerBase } from "./base/omar.controller.base";

@swagger.ApiTags("omars")
@common.Controller("omars")
export class OmarController extends OmarControllerBase {
  constructor(
    protected readonly service: OmarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
