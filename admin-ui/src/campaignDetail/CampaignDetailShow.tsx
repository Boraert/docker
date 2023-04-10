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

export const CampaignDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bought" source="bought" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="HoursMinutesSeconds" source="hoursMinutesSeconds" />
        <TextField label="ID" source="id" />
        <TextField label="Interaction rate" source="interactionRate" />
        <TextField label="Redeemed" source="redeemed" />
        <TextField label="Saved" source="saved" />
        <TextField label="Total sales" source="totalSales" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Website traffic" source="websiteTraffic" />
      </SimpleShowLayout>
    </Show>
  );
};
