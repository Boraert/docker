import { InputJsonValue } from "../../types";
import { UserCreateNestedManyWithoutStatisticsInput } from "./UserCreateNestedManyWithoutStatisticsInput";

export type StatisticCreateInput = {
  boughtDeals?: InputJsonValue;
  user?: UserCreateNestedManyWithoutStatisticsInput;
  websiteVisitors?: InputJsonValue;
};
