import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const CampaignEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
