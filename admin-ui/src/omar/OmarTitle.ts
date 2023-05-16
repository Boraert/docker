import { Omar as TOmar } from "../api/omar/Omar";

export const OMAR_TITLE_FIELD = "id";

export const OmarTitle = (record: TOmar): string => {
  return record.id || String(record.id);
};
