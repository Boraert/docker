import { CampaignDetailListRelationFilter } from "../campaignDetail/CampaignDetailListRelationFilter";
import { CampaignListRelationFilter } from "../campaign/CampaignListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  campaignDetails?: CampaignDetailListRelationFilter;
  campaigns?: CampaignListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
