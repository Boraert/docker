import { CampaignDetailWhereInput } from "./CampaignDetailWhereInput";
import { CampaignDetailOrderByInput } from "./CampaignDetailOrderByInput";

export type CampaignDetailFindManyArgs = {
  where?: CampaignDetailWhereInput;
  orderBy?: Array<CampaignDetailOrderByInput>;
  skip?: number;
  take?: number;
};
