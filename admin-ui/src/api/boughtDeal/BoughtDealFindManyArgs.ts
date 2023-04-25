import { BoughtDealWhereInput } from "./BoughtDealWhereInput";
import { BoughtDealOrderByInput } from "./BoughtDealOrderByInput";

export type BoughtDealFindManyArgs = {
  where?: BoughtDealWhereInput;
  orderBy?: Array<BoughtDealOrderByInput>;
  skip?: number;
  take?: number;
};
