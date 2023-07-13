import { User } from "../user/User";

export type CompanyRegistration = {
  approvalStatus: boolean | null;
  businessAddress: string | null;
  businessCategory: string;
  businessEmail: string;
  businessPhoneNumber: string | null;
  companyName: string;
  companyUrl: string;
  createdAt: Date;
  cvrNumber: string;
  id: string;
  logo: string | null;
  shortIntroductionToTheCompany: string;
  updatedAt: Date;
  user?: User;
};
