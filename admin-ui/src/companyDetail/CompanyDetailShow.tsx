import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const CompanyDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="ApprovalStatus" source="approvalStatus" />
        <TextField label="businessAddress" source="businessAddress" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
