import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const WebsiteVisitorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="April" source="april" />
        <TextField label="August" source="august" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="December" source="december" />
        <TextField label="February" source="february" />
        <TextField label="ID" source="id" />
        <TextField label="July" source="july" />
        <TextField label="June" source="june" />
        <TextField label="March" source="march" />
        <TextField label="May" source="may" />
        <TextField label="November " source="november" />
        <TextField label="October" source="october" />
        <TextField label="September" source="september" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
