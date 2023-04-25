/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BoughtDealWhereInput } from "./BoughtDealWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BoughtDealListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BoughtDealWhereInput,
  })
  @ValidateNested()
  @Type(() => BoughtDealWhereInput)
  @IsOptional()
  @Field(() => BoughtDealWhereInput, {
    nullable: true,
  })
  every?: BoughtDealWhereInput;

  @ApiProperty({
    required: false,
    type: () => BoughtDealWhereInput,
  })
  @ValidateNested()
  @Type(() => BoughtDealWhereInput)
  @IsOptional()
  @Field(() => BoughtDealWhereInput, {
    nullable: true,
  })
  some?: BoughtDealWhereInput;

  @ApiProperty({
    required: false,
    type: () => BoughtDealWhereInput,
  })
  @ValidateNested()
  @Type(() => BoughtDealWhereInput)
  @IsOptional()
  @Field(() => BoughtDealWhereInput, {
    nullable: true,
  })
  none?: BoughtDealWhereInput;
}
export { BoughtDealListRelationFilter as BoughtDealListRelationFilter };