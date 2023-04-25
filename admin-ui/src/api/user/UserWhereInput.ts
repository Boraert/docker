import { BoughtDealListRelationFilter } from "../boughtDeal/BoughtDealListRelationFilter";
import { CampaignDetailListRelationFilter } from "../campaignDetail/CampaignDetailListRelationFilter";
import { CampaignListRelationFilter } from "../campaign/CampaignListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WebsiteVisitorListRelationFilter } from "../websiteVisitor/WebsiteVisitorListRelationFilter";

export type UserWhereInput = {
  boughtDeals?: BoughtDealListRelationFilter;
  campaignDetails?: CampaignDetailListRelationFilter;
  campaigns?: CampaignListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  websiteVisitors?: WebsiteVisitorListRelationFilter;
};
