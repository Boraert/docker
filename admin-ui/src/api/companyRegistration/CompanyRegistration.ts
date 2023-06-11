import { User } from "../user/User";

export type CompanyRegistration = {
  approvalStatus: boolean | null;
  businessAddress: string;
  businessCategory: string;
  businessEmail: string;
  businessPhoneNumber: string;
  companyName: string;
  companyUrl: string | null;
  createdAt: Date;
  cvrNumber: string;
  id: string;
  logo: string | null;
  shortIntroductionToTheCompany: string;
  updatedAt: Date;
  user?: Array<User>;
};
