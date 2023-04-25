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
import { BoughtDealWhereInput } from "./BoughtDealWhereInput";
import { Type } from "class-transformer";
import { BoughtDealOrderByInput } from "./BoughtDealOrderByInput";

@ArgsType()
class BoughtDealFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BoughtDealWhereInput,
  })
  @Field(() => BoughtDealWhereInput, { nullable: true })
  @Type(() => BoughtDealWhereInput)
  where?: BoughtDealWhereInput;

  @ApiProperty({
    required: false,
    type: [BoughtDealOrderByInput],
  })
  @Field(() => [BoughtDealOrderByInput], { nullable: true })
  @Type(() => BoughtDealOrderByInput)
  orderBy?: Array<BoughtDealOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BoughtDealFindManyArgs as BoughtDealFindManyArgs };
