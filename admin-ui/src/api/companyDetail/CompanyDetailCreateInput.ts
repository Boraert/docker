import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyDetailCreateInput = {
  approvalStatus?: boolean | null;
  businessAddress?: string | null;
  user?: UserWhereUniqueInput | null;
};
