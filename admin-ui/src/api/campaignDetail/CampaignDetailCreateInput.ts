import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CampaignDetailCreateInput = {
  interactionRate?: number | null;
  redeemed?: number | null;
  saved?: number | null;
  totalSales?: number | null;
  user?: UserWhereUniqueInput | null;
  websiteTraffic?: number | null;
};
