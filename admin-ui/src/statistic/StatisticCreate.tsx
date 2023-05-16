import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const StatisticCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Bought Deals" source="boughtDeals" />
        <DateTimeInput label="Month" source="month" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="UserId" source="userId" />
        <NumberInput
          step={1}
          label="Website visitors"
          source="websiteVisitors"
        />
      </SimpleForm>
    </Create>
  );
};
