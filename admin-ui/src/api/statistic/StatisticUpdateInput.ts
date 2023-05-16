import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatisticUpdateInput = {
  boughtDeals?: number | null;
  month?: Date | null;
  user?: UserWhereUniqueInput | null;
  websiteVisitors?: number | null;
};
