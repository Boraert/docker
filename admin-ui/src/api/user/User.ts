import { BoughtDeal } from "../boughtDeal/BoughtDeal";
import { CampaignDetail } from "../campaignDetail/CampaignDetail";
import { Campaign } from "../campaign/Campaign";
import { JsonValue } from "type-fest";

export type User = {
  boughtDeals?: Array<BoughtDeal>;
  campaignDetails?: Array<CampaignDetail>;
  campaigns?: Array<Campaign>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
