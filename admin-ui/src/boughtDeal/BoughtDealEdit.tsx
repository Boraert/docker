import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const BoughtDealEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="April" source="april" />
        <NumberInput step={1} label="August" source="august" />
        <NumberInput step={1} label="December" source="december" />
        <NumberInput step={1} label="February" source="february" />
        <NumberInput step={1} label="January" source="january" />
        <NumberInput step={1} label="July" source="july" />
        <NumberInput step={1} label="June" source="june" />
        <NumberInput step={1} label="March" source="march" />
        <NumberInput step={1} label="May" source="may" />
        <NumberInput step={1} label="November " source="november" />
        <NumberInput step={1} label="October" source="october" />
        <NumberInput step={1} label="September" source="september" />
        <ReferenceArrayInput
          source="user"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
