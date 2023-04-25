import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type StatisticWhereInput = {
  boughtDeals?: JsonFilter;
  id?: StringFilter;
  user?: UserListRelationFilter;
  websiteVisitors?: JsonFilter;
};
