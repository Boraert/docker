import { User } from "../user/User";

export type CampaignDetail = {
  createdAt: Date;
  id: string;
  interactionRate: number | null;
  redeemed: number | null;
  saved: number | null;
  totalSales: number | null;
  updatedAt: Date;
  user?: User | null;
  websiteTraffic: number | null;
};
