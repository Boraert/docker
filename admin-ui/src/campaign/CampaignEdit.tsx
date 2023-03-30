import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CampaignEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Campaign headline" source="campaignHeadline" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Images" source="images" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <TextInput label="Value" multiline source="value" />
      </SimpleForm>
    </Edit>
  );
};
