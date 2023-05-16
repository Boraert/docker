import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyDetailWhereInput = {
  approvalStatus?: BooleanNullableFilter;
  businessAddress?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
