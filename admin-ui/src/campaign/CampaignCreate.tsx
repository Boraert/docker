import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CampaignCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Campaign headline" source="campaignHeadline" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Images" source="images" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <TextInput label="Value" multiline source="value" />
      </SimpleForm>
    </Create>
  );
};
