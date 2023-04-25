import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CampaignDetailCreateInput = {
  bought?: number | null;
  char?: InputJsonValue;
  description?: string | null;
  hoursMinutesSeconds?: Date | null;
  interactionRate?: number | null;
  redeemed?: number | null;
  saved?: number | null;
  totalSales?: number | null;
  user?: UserWhereUniqueInput | null;
  websiteTraffic?: number | null;
};
