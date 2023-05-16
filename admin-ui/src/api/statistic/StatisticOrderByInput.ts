import { SortOrder } from "../../util/SortOrder";

export type StatisticOrderByInput = {
  boughtDeals?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  month?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  websiteVisitors?: SortOrder;
};
