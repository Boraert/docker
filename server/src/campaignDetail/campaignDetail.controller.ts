import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CampaignDetailService } from "./campaignDetail.service";
import { CampaignDetailControllerBase } from "./base/campaignDetail.controller.base";

@swagger.ApiTags("campaignDetails")
@common.Controller("campaignDetails")
export class CampaignDetailController extends CampaignDetailControllerBase {
  constructor(
    protected readonly service: CampaignDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
