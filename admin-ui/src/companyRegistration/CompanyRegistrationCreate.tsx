import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
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
        <ReferenceArrayInput
          source="user"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
