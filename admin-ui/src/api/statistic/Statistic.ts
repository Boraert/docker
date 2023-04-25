import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Statistic = {
  boughtDeals: JsonValue;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: Array<User>;
  websiteVisitors: JsonValue;
};
