import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CampaignShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Campaign headline" source="campaignHeadline" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Images" source="images" />
        <TextField label="Quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
