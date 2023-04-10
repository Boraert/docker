import { Campaign as TCampaign } from "../api/campaign/Campaign";

export const CAMPAIGN_TITLE_FIELD = "campaignDuration";

export const CampaignTitle = (record: TCampaign): string => {
  return record.campaignDuration || String(record.id);
};
