import { CampaignDetailUpdateManyWithoutUsersInput } from "./CampaignDetailUpdateManyWithoutUsersInput";
import { CampaignUpdateManyWithoutUsersInput } from "./CampaignUpdateManyWithoutUsersInput";
import { CompanyDetailUpdateManyWithoutUsersInput } from "./CompanyDetailUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StatisticUpdateManyWithoutUsersInput } from "./StatisticUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  campaignDetails?: CampaignDetailUpdateManyWithoutUsersInput;
  campaigns?: CampaignUpdateManyWithoutUsersInput;
  companyDetails?: CompanyDetailUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  statistics?: StatisticUpdateManyWithoutUsersInput;
  username?: string;
};
