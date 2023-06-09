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
import { StatisticWhereInput } from "./StatisticWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StatisticListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StatisticWhereInput,
  })
  @ValidateNested()
  @Type(() => StatisticWhereInput)
  @IsOptional()
  @Field(() => StatisticWhereInput, {
    nullable: true,
  })
  every?: StatisticWhereInput;

  @ApiProperty({
    required: false,
    type: () => StatisticWhereInput,
  })
  @ValidateNested()
  @Type(() => StatisticWhereInput)
  @IsOptional()
  @Field(() => StatisticWhereInput, {
    nullable: true,
  })
  some?: StatisticWhereInput;

  @ApiProperty({
    required: false,
    type: () => StatisticWhereInput,
  })
  @ValidateNested()
  @Type(() => StatisticWhereInput)
  @IsOptional()
  @Field(() => StatisticWhereInput, {
    nullable: true,
  })
  none?: StatisticWhereInput;
}
export { StatisticListRelationFilter as StatisticListRelationFilter };
