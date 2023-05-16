import { User } from "../user/User";

export type CompanyDetail = {
  approvalStatus: boolean | null;
  businessAddress: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: Array<User>;
};
