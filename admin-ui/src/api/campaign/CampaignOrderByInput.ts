import { SortOrder } from "../../util/SortOrder";

export type CampaignOrderByInput = {
  campaigEendTime?: SortOrder;
  campaignHeadline?: SortOrder;
  campaignStartTime?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  value?: SortOrder;
};
