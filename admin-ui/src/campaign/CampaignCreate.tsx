import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
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
        <DateTimeInput label="CampaigEendTime" source="campaigEendTime" />
        <TextInput label="Campaign headline" source="campaignHeadline" />
        <DateTimeInput label="CampaignStartTime" source="campaignStartTime" />
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
