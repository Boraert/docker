import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CampaignCreateInput = {
  campaignHeadline: string;
  description?: string | null;
  images?: string | null;
  quantity?: number | null;
  user?: UserWhereUniqueInput | null;
  value?: string | null;
};
