import { SortOrder } from "../../util/SortOrder";

export type CampaignOrderByInput = {
  campaignHeadline?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
