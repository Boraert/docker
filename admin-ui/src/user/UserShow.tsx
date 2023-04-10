import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="CampaignDetail"
          target="UserId"
          label="Campaign Details"
        >
          <Datagrid rowClick="show">
            <TextField label="Bought" source="bought" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField
              label="HoursMinutesSeconds"
              source="hoursMinutesSeconds"
            />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Campaign"
          target="UserId"
          label="Campaigns"
        >
          <Datagrid rowClick="show">
            <TextField label="Campaign Duration" source="campaignDuration" />
            <TextField label="Campaign headline" source="campaignHeadline" />
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
