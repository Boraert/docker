import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CampaignDetailUpdateInput = {
  bought?: number | null;
  description?: string | null;
  hoursMinutesSeconds?: Date | null;
  interactionRate?: number | null;
  redeemed?: number | null;
  saved?: number | null;
  totalSales?: number | null;
  user?: UserWhereUniqueInput | null;
  websiteTraffic?: number | null;
};
