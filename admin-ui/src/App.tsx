import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CampaignList } from "./campaign/CampaignList";
import { CampaignCreate } from "./campaign/CampaignCreate";
import { CampaignEdit } from "./campaign/CampaignEdit";
import { CampaignShow } from "./campaign/CampaignShow";
import { CampaignDetailList } from "./campaignDetail/CampaignDetailList";
import { CampaignDetailCreate } from "./campaignDetail/CampaignDetailCreate";
import { CampaignDetailEdit } from "./campaignDetail/CampaignDetailEdit";
import { CampaignDetailShow } from "./campaignDetail/CampaignDetailShow";
import { BoughtDealList } from "./boughtDeal/BoughtDealList";
import { BoughtDealCreate } from "./boughtDeal/BoughtDealCreate";
import { BoughtDealEdit } from "./boughtDeal/BoughtDealEdit";
import { BoughtDealShow } from "./boughtDeal/BoughtDealShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Campaign"
          list={CampaignList}
          edit={CampaignEdit}
          create={CampaignCreate}
          show={CampaignShow}
        />
        <Resource
          name="CampaignDetail"
          list={CampaignDetailList}
          edit={CampaignDetailEdit}
          create={CampaignDetailCreate}
          show={CampaignDetailShow}
        />
        <Resource
          name="BoughtDeal"
          list={BoughtDealList}
          edit={BoughtDealEdit}
          create={BoughtDealCreate}
          show={BoughtDealShow}
        />
      </Admin>
    </div>
  );
};

export default App;
