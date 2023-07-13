import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyRegistrationCreateInput = {
  approvalStatus?: boolean | null;
  businessAddress: string;
  businessCategory: string;
  businessEmail: string;
  businessPhoneNumber: string;
  companyName: string;
  companyUrl: string;
  cvrNumber: string;
  logo?: string | null;
  shortIntroductionToTheCompany: string;
  user: UserWhereUniqueInput;
};
