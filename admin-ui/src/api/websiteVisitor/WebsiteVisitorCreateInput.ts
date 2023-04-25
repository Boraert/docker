import { UserCreateNestedManyWithoutWebsiteVisitorsInput } from "./UserCreateNestedManyWithoutWebsiteVisitorsInput";

export type WebsiteVisitorCreateInput = {
  april?: number | null;
  august?: number | null;
  december?: number | null;
  february?: number | null;
  july?: number | null;
  june?: number | null;
  march?: number | null;
  may?: number | null;
  november?: number | null;
  october?: number | null;
  september?: number | null;
  user?: UserCreateNestedManyWithoutWebsiteVisitorsInput;
};
