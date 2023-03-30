import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CampaignDetailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Campaign Details"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Interaction rate" source="interactionRate" />
        <TextField label="Redeemed" source="redeemed" />
        <TextField label="Saved" source="saved" />
        <TextField label="Total sales" source="totalSales" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Website traffic" source="websiteTraffic" />
      </Datagrid>
    </List>
  );
};
