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
import { CompanyRegistrationWhereInput } from "./CompanyRegistrationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CompanyRegistrationOrderByInput } from "./CompanyRegistrationOrderByInput";

@ArgsType()
class CompanyRegistrationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CompanyRegistrationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CompanyRegistrationWhereInput, { nullable: true })
  @Type(() => CompanyRegistrationWhereInput)
  where?: CompanyRegistrationWhereInput;

  @ApiProperty({
    required: false,
    type: [CompanyRegistrationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CompanyRegistrationOrderByInput], { nullable: true })
  @Type(() => CompanyRegistrationOrderByInput)
  orderBy?: Array<CompanyRegistrationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CompanyRegistrationFindManyArgs as CompanyRegistrationFindManyArgs };
