import { WebsiteVisitorWhereInput } from "./WebsiteVisitorWhereInput";
import { WebsiteVisitorOrderByInput } from "./WebsiteVisitorOrderByInput";

export type WebsiteVisitorFindManyArgs = {
  where?: WebsiteVisitorWhereInput;
  orderBy?: Array<WebsiteVisitorOrderByInput>;
  skip?: number;
  take?: number;
};
