import { BoughtDeal as TBoughtDeal } from "../api/boughtDeal/BoughtDeal";

export const BOUGHTDEAL_TITLE_FIELD = "id";

export const BoughtDealTitle = (record: TBoughtDeal): string => {
  return record.id || String(record.id);
};
