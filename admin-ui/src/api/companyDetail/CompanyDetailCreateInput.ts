import { UserCreateNestedManyWithoutCompanyDetailsInput } from "./UserCreateNestedManyWithoutCompanyDetailsInput";

export type CompanyDetailCreateInput = {
  approvalStatus?: boolean | null;
  businessAddress?: string | null;
  user?: UserCreateNestedManyWithoutCompanyDetailsInput;
};
