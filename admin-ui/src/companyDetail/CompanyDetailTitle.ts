import { CompanyDetail as TCompanyDetail } from "../api/companyDetail/CompanyDetail";

export const COMPANYDETAIL_TITLE_FIELD = "businessAddress";

export const CompanyDetailTitle = (record: TCompanyDetail): string => {
  return record.businessAddress || String(record.id);
};
