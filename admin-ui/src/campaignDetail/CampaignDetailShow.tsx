import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const CampaignDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Interaction rate" source="interactionRate" />
        <TextField label="Redeemed" source="redeemed" />
        <TextField label="Saved" source="saved" />
        <TextField label="Total sales" source="totalSales" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Website traffic" source="websiteTraffic" />
      </SimpleShowLayout>
    </Show>
  );
};
