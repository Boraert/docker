import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CompanyDetailWhereInput = {
  approvalStatus?: BooleanNullableFilter;
  businessAddress?: StringNullableFilter;
  id?: StringFilter;
  user?: UserListRelationFilter;
};
