import { CampaignDetail as TCampaignDetail } from "../api/campaignDetail/CampaignDetail";

export const CAMPAIGNDETAIL_TITLE_FIELD = "id";

export const CampaignDetailTitle = (record: TCampaignDetail): string => {
  return record.id || String(record.id);
};
