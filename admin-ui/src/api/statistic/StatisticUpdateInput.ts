import { InputJsonValue } from "../../types";
import { UserUpdateManyWithoutStatisticsInput } from "./UserUpdateManyWithoutStatisticsInput";

export type StatisticUpdateInput = {
  boughtDeals?: InputJsonValue;
  user?: UserUpdateManyWithoutStatisticsInput;
  websiteVisitors?: InputJsonValue;
};
