import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type WebsiteVisitorWhereInput = {
  april?: IntNullableFilter;
  august?: IntNullableFilter;
  december?: IntNullableFilter;
  february?: IntNullableFilter;
  id?: StringFilter;
  july?: IntNullableFilter;
  june?: IntNullableFilter;
  march?: IntNullableFilter;
  may?: IntNullableFilter;
  november?: IntNullableFilter;
  october?: IntNullableFilter;
  september?: IntNullableFilter;
  user?: UserListRelationFilter;
};
