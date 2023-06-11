import { UserCreateNestedManyWithoutCompanyRegistrationsInput } from "./UserCreateNestedManyWithoutCompanyRegistrationsInput";

export type CompanyRegistrationCreateInput = {
  approvalStatus?: boolean | null;
  businessAddress: string;
  businessCategory: string;
  businessEmail: string;
  businessPhoneNumber: string;
  companyName: string;
  companyUrl?: string | null;
  cvrNumber: string;
  logo?: string | null;
  shortIntroductionToTheCompany: string;
  user?: UserCreateNestedManyWithoutCompanyRegistrationsInput;
};
