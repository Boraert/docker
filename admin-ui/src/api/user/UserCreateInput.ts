import { BoughtDealCreateNestedManyWithoutUsersInput } from "./BoughtDealCreateNestedManyWithoutUsersInput";
import { CampaignDetailCreateNestedManyWithoutUsersInput } from "./CampaignDetailCreateNestedManyWithoutUsersInput";
import { CampaignCreateNestedManyWithoutUsersInput } from "./CampaignCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  boughtDeals?: BoughtDealCreateNestedManyWithoutUsersInput;
  campaignDetails?: CampaignDetailCreateNestedManyWithoutUsersInput;
  campaigns?: CampaignCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
