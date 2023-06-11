import { CompanyRegistration as TCompanyRegistration } from "../api/companyRegistration/CompanyRegistration";

export const COMPANYREGISTRATION_TITLE_FIELD = "companyName";

export const CompanyRegistrationTitle = (
  record: TCompanyRegistration
): string => {
  return record.companyName || String(record.id);
};
