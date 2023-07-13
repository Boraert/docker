import { User } from "../user/User";

export type CompanyRegistration = {
  approvalStatus: boolean | null;
  businessAddress: string;
  businessCategory: string;
  businessEmail: string;
  businessPhoneNumber: string;
  companyName: string;
  companyUrl: string;
  createdAt: Date;
  cvrNumber: string;
  id: string;
  logo: string;
  shortIntroductionToTheCompany: string;
  updatedAt: Date;
  user?: User;
};
