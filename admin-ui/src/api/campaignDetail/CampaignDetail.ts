import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type CampaignDetail = {
  bought: number | null;
  char: JsonValue;
  createdAt: Date;
  description: string | null;
  hoursMinutesSeconds: Date | null;
  id: string;
  interactionRate: number | null;
  redeemed: number | null;
  saved: number | null;
  totalSales: number | null;
  updatedAt: Date;
  user?: User | null;
  websiteTraffic: number | null;
};
