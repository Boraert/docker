import { SortOrder } from "../../util/SortOrder";

export type CampaignDetailOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  interactionRate?: SortOrder;
  redeemed?: SortOrder;
  saved?: SortOrder;
  totalSales?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  websiteTraffic?: SortOrder;
};
