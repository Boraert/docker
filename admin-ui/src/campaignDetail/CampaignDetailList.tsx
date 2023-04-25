import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

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
        <TextField label="Bought" source="bought" />
        <TextField label="char" source="char" />
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
      </Datagrid>
    </List>
  );
};
