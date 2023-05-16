import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatisticUpdateInput = {
  boughtDeals?: number | null;
  month?: Date | null;
  user?: UserWhereUniqueInput | null;
  userId?: string | null;
  websiteVisitors?: number | null;
};
