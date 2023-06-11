import { CampaignDetailCreateNestedManyWithoutUsersInput } from "./CampaignDetailCreateNestedManyWithoutUsersInput";
import { CampaignCreateNestedManyWithoutUsersInput } from "./CampaignCreateNestedManyWithoutUsersInput";
import { CompanyRegistrationCreateNestedManyWithoutUsersInput } from "./CompanyRegistrationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StatisticCreateNestedManyWithoutUsersInput } from "./StatisticCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  campaignDetails?: CampaignDetailCreateNestedManyWithoutUsersInput;
  campaigns?: CampaignCreateNestedManyWithoutUsersInput;
  companyRegistration?: CompanyRegistrationCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  statistics?: StatisticCreateNestedManyWithoutUsersInput;
  username: string;
};
