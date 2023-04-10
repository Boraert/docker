import { SortOrder } from "../../util/SortOrder";

export type CampaignDetailOrderByInput = {
  bought?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  hoursMinutesSeconds?: SortOrder;
  id?: SortOrder;
  interactionRate?: SortOrder;
  redeemed?: SortOrder;
  saved?: SortOrder;
  totalSales?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  websiteTraffic?: SortOrder;
};
