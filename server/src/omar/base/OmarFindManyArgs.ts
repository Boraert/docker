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
import { OmarWhereInput } from "./OmarWhereInput";
import { Type } from "class-transformer";
import { OmarOrderByInput } from "./OmarOrderByInput";

@ArgsType()
class OmarFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OmarWhereInput,
  })
  @Field(() => OmarWhereInput, { nullable: true })
  @Type(() => OmarWhereInput)
  where?: OmarWhereInput;

  @ApiProperty({
    required: false,
    type: [OmarOrderByInput],
  })
  @Field(() => [OmarOrderByInput], { nullable: true })
  @Type(() => OmarOrderByInput)
  orderBy?: Array<OmarOrderByInput>;

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

export { OmarFindManyArgs as OmarFindManyArgs };