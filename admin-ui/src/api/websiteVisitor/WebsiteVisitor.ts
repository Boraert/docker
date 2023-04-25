import { User } from "../user/User";

export type WebsiteVisitor = {
  april: number | null;
  august: number | null;
  createdAt: Date;
  december: number | null;
  february: number | null;
  id: string;
  july: number | null;
  june: number | null;
  march: number | null;
  may: number | null;
  november: number | null;
  october: number | null;
  september: number | null;
  updatedAt: Date;
  user?: Array<User>;
};
