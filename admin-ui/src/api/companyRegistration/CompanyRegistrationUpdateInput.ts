import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyRegistrationUpdateInput = {
  approvalStatus?: boolean | null;
  businessAddress?: string | null;
  businessCategory?: string;
  businessEmail?: string;
  businessPhoneNumber?: string | null;
  companyName?: string;
  companyUrl?: string;
  cvrNumber?: string;
  logo?: string | null;
  shortIntroductionToTheCompany?: string;
  user?: UserWhereUniqueInput;
};
