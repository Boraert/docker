import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CampaignUpdateInput = {
  campaigEendTime?: Date | null;
  campaignHeadline?: string;
  campaignStartTime?: Date | null;
  description?: string | null;
  images?: string | null;
  quantity?: number | null;
  user?: UserWhereUniqueInput | null;
  value?: string | null;
};
