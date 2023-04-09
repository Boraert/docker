import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CampaignDetailWhereInput = {
  id?: StringFilter;
  interactionRate?: IntNullableFilter;
  redeemed?: IntNullableFilter;
  saved?: IntNullableFilter;
  totalSales?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  websiteTraffic?: IntNullableFilter;
};
