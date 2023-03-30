import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CampaignDetailWhereInput = {
  id?: StringFilter;
  interactionRate?: IntNullableFilter;
  redeemed?: IntNullableFilter;
  saved?: IntNullableFilter;
  totalSales?: IntNullableFilter;
  websiteTraffic?: IntNullableFilter;
};
