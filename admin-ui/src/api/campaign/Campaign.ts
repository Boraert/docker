import { User } from "../user/User";

export type Campaign = {
  campaigEendTime: Date | null;
  campaignHeadline: string;
  campaignStartTime: Date | null;
  createdAt: Date;
  description: string | null;
  id: string;
  images: string | null;
  quantity: number | null;
  updatedAt: Date;
  user?: User | null;
  value: string | null;
};
