/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CampaignDetail } from "../../campaignDetail/base/CampaignDetail";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Campaign } from "../../campaign/base/Campaign";
import { CompanyRegistration } from "../../companyRegistration/base/CompanyRegistration";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Statistic } from "../../statistic/base/Statistic";

@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: () => [CampaignDetail],
  })
  @ValidateNested()
  @Type(() => CampaignDetail)
  @IsOptional()
  campaignDetails?: Array<CampaignDetail>;

  @ApiProperty({
    required: false,
    type: () => [Campaign],
  })
  @ValidateNested()
  @Type(() => Campaign)
  @IsOptional()
  campaigns?: Array<Campaign>;

  @ApiProperty({
    required: false,
    type: () => [CompanyRegistration],
  })
  @ValidateNested()
  @Type(() => CompanyRegistration)
  @IsOptional()
  companyRegistration?: Array<CompanyRegistration>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => [Statistic],
  })
  @ValidateNested()
  @Type(() => Statistic)
  @IsOptional()
  statistics?: Array<Statistic>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { User as User };
