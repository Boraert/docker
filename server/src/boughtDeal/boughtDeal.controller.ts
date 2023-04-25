import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BoughtDealService } from "./boughtDeal.service";
import { BoughtDealControllerBase } from "./base/boughtDeal.controller.base";

@swagger.ApiTags("boughtDeals")
@common.Controller("boughtDeals")
export class BoughtDealController extends BoughtDealControllerBase {
  constructor(
    protected readonly service: BoughtDealService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
