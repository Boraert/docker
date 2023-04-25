import { WebsiteVisitor as TWebsiteVisitor } from "../api/websiteVisitor/WebsiteVisitor";

export const WEBSITEVISITOR_TITLE_FIELD = "id";

export const WebsiteVisitorTitle = (record: TWebsiteVisitor): string => {
  return record.id || String(record.id);
};
