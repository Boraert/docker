import { CampaignDetail } from "../campaignDetail/CampaignDetail";
import { Campaign } from "../campaign/Campaign";
import { JsonValue } from "type-fest";
import { Statistic } from "../statistic/Statistic";

export type User = {
  campaignDetails?: Array<CampaignDetail>;
  campaigns?: Array<Campaign>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  statistics?: Array<Statistic>;
  updatedAt: Date;
  username: string;
};
