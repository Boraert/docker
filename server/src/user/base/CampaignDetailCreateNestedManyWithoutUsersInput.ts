/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CampaignDetailWhereUniqueInput } from "../../campaignDetail/base/CampaignDetailWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CampaignDetailCreateNestedManyWithoutUsersInput {
  @Field(() => [CampaignDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CampaignDetailWhereUniqueInput],
  })
  connect?: Array<CampaignDetailWhereUniqueInput>;
}

export { CampaignDetailCreateNestedManyWithoutUsersInput as CampaignDetailCreateNestedManyWithoutUsersInput };
