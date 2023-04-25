/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateBoughtDealArgs } from "./CreateBoughtDealArgs";
import { UpdateBoughtDealArgs } from "./UpdateBoughtDealArgs";
import { DeleteBoughtDealArgs } from "./DeleteBoughtDealArgs";
import { BoughtDealFindManyArgs } from "./BoughtDealFindManyArgs";
import { BoughtDealFindUniqueArgs } from "./BoughtDealFindUniqueArgs";
import { BoughtDeal } from "./BoughtDeal";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { BoughtDealService } from "../boughtDeal.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BoughtDeal)
export class BoughtDealResolverBase {
  constructor(
    protected readonly service: BoughtDealService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "read",
    possession: "any",
  })
  async _boughtDealsMeta(
    @graphql.Args() args: BoughtDealFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BoughtDeal])
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "read",
    possession: "any",
  })
  async boughtDeals(
    @graphql.Args() args: BoughtDealFindManyArgs
  ): Promise<BoughtDeal[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BoughtDeal, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "read",
    possession: "own",
  })
  async boughtDeal(
    @graphql.Args() args: BoughtDealFindUniqueArgs
  ): Promise<BoughtDeal | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BoughtDeal)
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "create",
    possession: "any",
  })
  async createBoughtDeal(
    @graphql.Args() args: CreateBoughtDealArgs
  ): Promise<BoughtDeal> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BoughtDeal)
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "update",
    possession: "any",
  })
  async updateBoughtDeal(
    @graphql.Args() args: UpdateBoughtDealArgs
  ): Promise<BoughtDeal | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BoughtDeal)
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "delete",
    possession: "any",
  })
  async deleteBoughtDeal(
    @graphql.Args() args: DeleteBoughtDealArgs
  ): Promise<BoughtDeal | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(
    @graphql.Parent() parent: BoughtDeal,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUser(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
