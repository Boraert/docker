import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StatisticWhereInput = {
  boughtDeals?: IntNullableFilter;
  id?: StringFilter;
  month?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  userId?: StringNullableFilter;
  websiteVisitors?: IntNullableFilter;
};
