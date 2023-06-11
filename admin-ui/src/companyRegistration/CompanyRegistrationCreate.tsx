import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const CompanyRegistrationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="ApprovalStatus" source="approvalStatus" />
        <TextInput label="businessAddress" source="businessAddress" />
        <TextInput label="businessCategory" source="businessCategory" />
        <TextInput label="businessEmail" source="businessEmail" type="email" />
        <TextInput
          label="businessPhoneNumber"
          multiline
          source="businessPhoneNumber"
        />
        <TextInput label="companyName" multiline source="companyName" />
        <TextInput label="companyUrl" source="companyUrl" />
        <TextInput label="cvrNumber" source="cvrNumber" />
        <TextInput label="logo" source="logo" />
        <TextInput
          label="shortIntroductionToTheCompany"
          multiline
          source="shortIntroductionToTheCompany"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
