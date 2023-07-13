import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyRegistrationUpdateInput = {
  approvalStatus?: boolean | null;
  businessAddress?: string;
  businessCategory?: string;
  businessEmail?: string;
  businessPhoneNumber?: string;
  companyName?: string;
  companyUrl?: string;
  cvrNumber?: string;
  logo?: string;
  shortIntroductionToTheCompany?: string;
  user?: UserWhereUniqueInput;
};
