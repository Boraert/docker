import { BoughtDealUpdateManyWithoutUsersInput } from "./BoughtDealUpdateManyWithoutUsersInput";
import { CampaignDetailUpdateManyWithoutUsersInput } from "./CampaignDetailUpdateManyWithoutUsersInput";
import { CampaignUpdateManyWithoutUsersInput } from "./CampaignUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WebsiteVisitorUpdateManyWithoutUsersInput } from "./WebsiteVisitorUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  boughtDeals?: BoughtDealUpdateManyWithoutUsersInput;
  campaignDetails?: CampaignDetailUpdateManyWithoutUsersInput;
  campaigns?: CampaignUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  websiteVisitors?: WebsiteVisitorUpdateManyWithoutUsersInput;
};
