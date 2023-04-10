import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const CampaignCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Campaign Duration" source="campaignDuration" />
        <TextInput label="Campaign headline" source="campaignHeadline" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Images" multiline source="images" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Value" multiline source="value" />
      </SimpleForm>
    </Create>
  );
};
