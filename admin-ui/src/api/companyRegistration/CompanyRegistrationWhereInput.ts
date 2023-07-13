import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyRegistrationWhereInput = {
  approvalStatus?: BooleanNullableFilter;
  businessAddress?: StringFilter;
  businessCategory?: StringFilter;
  businessEmail?: StringFilter;
  businessPhoneNumber?: StringFilter;
  companyName?: StringFilter;
  companyUrl?: StringFilter;
  cvrNumber?: StringFilter;
  id?: StringFilter;
  logo?: StringFilter;
  shortIntroductionToTheCompany?: StringFilter;
  user?: UserWhereUniqueInput;
};
