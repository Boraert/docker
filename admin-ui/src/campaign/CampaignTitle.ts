import { Campaign as TCampaign } from "../api/campaign/Campaign";

export const CAMPAIGN_TITLE_FIELD = "campaignHeadline";

export const CampaignTitle = (record: TCampaign): string => {
  return record.campaignHeadline || String(record.id);
};
