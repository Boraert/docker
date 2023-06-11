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
import { CompanyRegistrationWhereInput } from "./CompanyRegistrationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CompanyRegistrationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CompanyRegistrationWhereInput,
  })
  @ValidateNested()
  @Type(() => CompanyRegistrationWhereInput)
  @IsOptional()
  @Field(() => CompanyRegistrationWhereInput, {
    nullable: true,
  })
  every?: CompanyRegistrationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CompanyRegistrationWhereInput,
  })
  @ValidateNested()
  @Type(() => CompanyRegistrationWhereInput)
  @IsOptional()
  @Field(() => CompanyRegistrationWhereInput, {
    nullable: true,
  })
  some?: CompanyRegistrationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CompanyRegistrationWhereInput,
  })
  @ValidateNested()
  @Type(() => CompanyRegistrationWhereInput)
  @IsOptional()
  @Field(() => CompanyRegistrationWhereInput, {
    nullable: true,
  })
  none?: CompanyRegistrationWhereInput;
}
export { CompanyRegistrationListRelationFilter as CompanyRegistrationListRelationFilter };