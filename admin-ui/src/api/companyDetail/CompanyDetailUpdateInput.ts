import { UserUpdateManyWithoutCompanyDetailsInput } from "./UserUpdateManyWithoutCompanyDetailsInput";

export type CompanyDetailUpdateInput = {
  approvalStatus?: boolean | null;
  businessAddress?: string | null;
  user?: UserUpdateManyWithoutCompanyDetailsInput;
};
