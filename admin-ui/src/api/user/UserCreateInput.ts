import { CampaignDetailCreateNestedManyWithoutUsersInput } from "./CampaignDetailCreateNestedManyWithoutUsersInput";
import { CampaignCreateNestedManyWithoutUsersInput } from "./CampaignCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  campaignDetails?: CampaignDetailCreateNestedManyWithoutUsersInput;
  campaigns?: CampaignCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
