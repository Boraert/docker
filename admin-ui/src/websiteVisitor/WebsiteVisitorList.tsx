import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const WebsiteVisitorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Website Visitors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
