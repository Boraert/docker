import { OmarWhereInput } from "./OmarWhereInput";
import { OmarOrderByInput } from "./OmarOrderByInput";

export type OmarFindManyArgs = {
  where?: OmarWhereInput;
  orderBy?: Array<OmarOrderByInput>;
  skip?: number;
  take?: number;
};
