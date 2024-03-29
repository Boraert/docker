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
  BooleanField,
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
          target="userId"
          label="Campaign Details"
        >
          <Datagrid rowClick="show">
            <TextField label="Bought" source="bought" />
            <TextField label="char" source="char" />
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
          target="userId"
          label="Campaigns"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CompanyRegistration"
          target="userId"
          label="Company Registration"
        >
          <Datagrid rowClick="show">
            <BooleanField label="ApprovalStatus" source="approvalStatus" />
            <TextField label="businessAddress" source="businessAddress" />
            <TextField label="businessCategory" source="businessCategory" />
            <TextField label="businessEmail" source="businessEmail" />
            <TextField
              label="businessPhoneNumber"
              source="businessPhoneNumber"
            />
            <TextField label="companyName" source="companyName" />
            <TextField label="companyUrl" source="companyUrl" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="cvrNumber" source="cvrNumber" />
            <TextField label="ID" source="id" />
            <TextField label="logo" source="logo" />
            <TextField
              label="shortIntroductionToTheCompany"
              source="shortIntroductionToTheCompany"
            />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Statistic"
          target="userId"
          label="Statistics"
        >
          <Datagrid rowClick="show">
            <TextField label="Bought Deals" source="boughtDeals" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Month" source="month" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Website visitors" source="websiteVisitors" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
