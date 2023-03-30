import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const CampaignDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
