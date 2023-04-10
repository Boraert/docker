import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CampaignWhereInput = {
  campaignDuration?: StringNullableFilter;
  campaignHeadline?: StringFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: StringNullableFilter;
  quantity?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  value?: StringNullableFilter;
};
