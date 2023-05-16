import { CampaignDetailCreateNestedManyWithoutUsersInput } from "./CampaignDetailCreateNestedManyWithoutUsersInput";
import { CampaignCreateNestedManyWithoutUsersInput } from "./CampaignCreateNestedManyWithoutUsersInput";
import { CompanyDetailCreateNestedManyWithoutUsersInput } from "./CompanyDetailCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StatisticCreateNestedManyWithoutUsersInput } from "./StatisticCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  campaignDetails?: CampaignDetailCreateNestedManyWithoutUsersInput;
  campaigns?: CampaignCreateNestedManyWithoutUsersInput;
  companyDetails?: CompanyDetailCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  statistics?: StatisticCreateNestedManyWithoutUsersInput;
  username: string;
};
