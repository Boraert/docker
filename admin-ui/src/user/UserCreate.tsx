import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  PasswordInput,
} from "react-admin";

import { BoughtDealTitle } from "../boughtDeal/BoughtDealTitle";
import { CampaignDetailTitle } from "../campaignDetail/CampaignDetailTitle";
import { CampaignTitle } from "../campaign/CampaignTitle";
import { WebsiteVisitorTitle } from "../websiteVisitor/WebsiteVisitorTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="boughtDeals"
          reference="BoughtDeal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BoughtDealTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="campaignDetails"
          reference="CampaignDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CampaignDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="campaigns"
          reference="Campaign"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CampaignTitle} />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="websiteVisitors"
          reference="WebsiteVisitor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebsiteVisitorTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
