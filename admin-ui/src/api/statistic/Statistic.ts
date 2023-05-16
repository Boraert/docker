import { User } from "../user/User";

export type Statistic = {
  boughtDeals: number | null;
  createdAt: Date;
  id: string;
  month: Date | null;
  updatedAt: Date;
  user?: User | null;
  websiteVisitors: number | null;
};
