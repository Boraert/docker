import { UserUpdateManyWithoutCompanyRegistrationsInput } from "./UserUpdateManyWithoutCompanyRegistrationsInput";

export type CompanyRegistrationUpdateInput = {
  approvalStatus?: boolean | null;
  businessAddress?: string;
  businessCategory?: string;
  businessEmail?: string;
  businessPhoneNumber?: string;
  companyName?: string;
  companyUrl?: string | null;
  cvrNumber?: string;
  logo?: string | null;
  shortIntroductionToTheCompany?: string;
  user?: UserUpdateManyWithoutCompanyRegistrationsInput;
};
