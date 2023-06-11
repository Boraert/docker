import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CompanyRegistrationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Company Registration"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="ApprovalStatus" source="approvalStatus" />
        <TextField label="businessAddress" source="businessAddress" />
        <TextField label="businessCategory" source="businessCategory" />
        <TextField label="businessEmail" source="businessEmail" />
        <TextField label="businessPhoneNumber" source="businessPhoneNumber" />
        <TextField label="companyName" source="companyName" />
        <TextField label="companyUrl" source="companyUrl" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="cvrNumber" source="cvrNumber" />
        <TextField label="ID" source="id" />
        <TextField label="logo" source="logo" />
        <TextField
          label="shortIntroductionToTheCompany"
          source="shortIntroductionToTheCompany"
        />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
