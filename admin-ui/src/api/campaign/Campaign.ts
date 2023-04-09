import { User } from "../user/User";

export type Campaign = {
  campaignHeadline: string;
  createdAt: Date;
  description: string | null;
  id: string;
  images: string | null;
  quantity: number | null;
  updatedAt: Date;
  user?: User | null;
  value: string | null;
};
