import { CampaignDetailUpdateManyWithoutUsersInput } from "./CampaignDetailUpdateManyWithoutUsersInput";
import { CampaignUpdateManyWithoutUsersInput } from "./CampaignUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  campaignDetails?: CampaignDetailUpdateManyWithoutUsersInput;
  campaigns?: CampaignUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
