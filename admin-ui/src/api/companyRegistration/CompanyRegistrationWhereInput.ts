import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyRegistrationWhereInput = {
  approvalStatus?: BooleanNullableFilter;
  businessAddress?: StringNullableFilter;
  businessCategory?: StringFilter;
  businessEmail?: StringFilter;
  businessPhoneNumber?: StringNullableFilter;
  companyName?: StringFilter;
  companyUrl?: StringFilter;
  cvrNumber?: StringFilter;
  id?: StringFilter;
  logo?: StringNullableFilter;
  shortIntroductionToTheCompany?: StringFilter;
  user?: UserWhereUniqueInput;
};
