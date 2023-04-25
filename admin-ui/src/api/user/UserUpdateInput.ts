import { CampaignDetailUpdateManyWithoutUsersInput } from "./CampaignDetailUpdateManyWithoutUsersInput";
import { CampaignUpdateManyWithoutUsersInput } from "./CampaignUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StatisticUpdateManyWithoutUsersInput } from "./StatisticUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  campaignDetails?: CampaignDetailUpdateManyWithoutUsersInput;
  campaigns?: CampaignUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  statistics?: StatisticUpdateManyWithoutUsersInput;
  username?: string;
};
