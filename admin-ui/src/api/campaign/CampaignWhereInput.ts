import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CampaignWhereInput = {
  campaignHeadline?: StringFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: StringNullableFilter;
  quantity?: IntNullableFilter;
  value?: StringNullableFilter;
};
