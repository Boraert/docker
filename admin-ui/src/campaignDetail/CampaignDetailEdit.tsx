import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const CampaignDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Interaction rate"
          source="interactionRate"
        />
        <NumberInput step={1} label="Redeemed" source="redeemed" />
        <NumberInput step={1} label="Saved" source="saved" />
        <NumberInput step={1} label="Total sales" source="totalSales" />
        <NumberInput step={1} label="Website traffic" source="websiteTraffic" />
      </SimpleForm>
    </Edit>
  );
};
