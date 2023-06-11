import { CompanyRegistrationWhereInput } from "./CompanyRegistrationWhereInput";
import { CompanyRegistrationOrderByInput } from "./CompanyRegistrationOrderByInput";

export type CompanyRegistrationFindManyArgs = {
  where?: CompanyRegistrationWhereInput;
  orderBy?: Array<CompanyRegistrationOrderByInput>;
  skip?: number;
  take?: number;
};
