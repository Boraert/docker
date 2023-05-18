import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CampaignWhereInput = {
  campaigEendTime?: DateTimeNullableFilter;
  campaignHeadline?: StringFilter;
  campaignStartTime?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: StringNullableFilter;
  quantity?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  value?: StringNullableFilter;
};
