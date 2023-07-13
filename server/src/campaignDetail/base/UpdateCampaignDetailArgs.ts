/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CampaignDetailWhereUniqueInput } from "./CampaignDetailWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CampaignDetailUpdateInput } from "./CampaignDetailUpdateInput";

@ArgsType()
class UpdateCampaignDetailArgs {
  @ApiProperty({
    required: true,
    type: () => CampaignDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CampaignDetailWhereUniqueInput)
  @Field(() => CampaignDetailWhereUniqueInput, { nullable: false })
  where!: CampaignDetailWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CampaignDetailUpdateInput,
  })
  @ValidateNested()
  @Type(() => CampaignDetailUpdateInput)
  @Field(() => CampaignDetailUpdateInput, { nullable: false })
  data!: CampaignDetailUpdateInput;
}

export { UpdateCampaignDetailArgs as UpdateCampaignDetailArgs };
