import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CampaignDetailWhereInput = {
  bought?: IntNullableFilter;
  char?: JsonFilter;
  description?: StringNullableFilter;
  hoursMinutesSeconds?: DateTimeNullableFilter;
  id?: StringFilter;
  interactionRate?: IntNullableFilter;
  redeemed?: IntNullableFilter;
  saved?: IntNullableFilter;
  totalSales?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  websiteTraffic?: IntNullableFilter;
};
