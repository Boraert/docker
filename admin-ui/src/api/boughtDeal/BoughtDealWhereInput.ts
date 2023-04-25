import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type BoughtDealWhereInput = {
  april?: IntNullableFilter;
  august?: IntNullableFilter;
  december?: IntNullableFilter;
  february?: IntNullableFilter;
  id?: StringFilter;
  january?: IntNullableFilter;
  july?: IntNullableFilter;
  june?: IntNullableFilter;
  march?: IntNullableFilter;
  may?: IntNullableFilter;
  november?: IntNullableFilter;
  october?: IntNullableFilter;
  september?: IntNullableFilter;
  user?: UserListRelationFilter;
};
