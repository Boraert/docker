import { UserCreateNestedManyWithoutBoughtDealsInput } from "./UserCreateNestedManyWithoutBoughtDealsInput";

export type BoughtDealCreateInput = {
  april?: number | null;
  august?: number | null;
  december?: number | null;
  february?: number | null;
  january?: number | null;
  july?: number | null;
  june?: number | null;
  march?: number | null;
  may?: number | null;
  november?: number | null;
  october?: number | null;
  september?: number | null;
  user?: UserCreateNestedManyWithoutBoughtDealsInput;
};
