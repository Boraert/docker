import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CampaignShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="CampaigEendTime" source="campaigEendTime" />
        <TextField label="Campaign headline" source="campaignHeadline" />
        <TextField label="CampaignStartTime" source="campaignStartTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Images" source="images" />
        <TextField label="Quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
