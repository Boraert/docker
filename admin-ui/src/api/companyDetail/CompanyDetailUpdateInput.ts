import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyDetailUpdateInput = {
  approvalStatus?: boolean | null;
  businessAddress?: string | null;
  user?: UserWhereUniqueInput | null;
};
