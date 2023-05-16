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
import { CreateStatisticArgs } from "./CreateStatisticArgs";
import { UpdateStatisticArgs } from "./UpdateStatisticArgs";
import { DeleteStatisticArgs } from "./DeleteStatisticArgs";
import { StatisticFindManyArgs } from "./StatisticFindManyArgs";
import { StatisticFindUniqueArgs } from "./StatisticFindUniqueArgs";
import { Statistic } from "./Statistic";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { StatisticService } from "../statistic.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Statistic)
export class StatisticResolverBase {
  constructor(
    protected readonly service: StatisticService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Statistic",
    action: "read",
    possession: "any",
  })
  async _statisticsMeta(
    @graphql.Args() args: StatisticFindManyArgs
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
  @graphql.Query(() => [Statistic])
  @nestAccessControl.UseRoles({
    resource: "Statistic",
    action: "read",
    possession: "any",
  })
  async statistics(
    @graphql.Args() args: StatisticFindManyArgs
  ): Promise<Statistic[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Statistic, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Statistic",
    action: "read",
    possession: "own",
  })
  async statistic(
    @graphql.Args() args: StatisticFindUniqueArgs
  ): Promise<Statistic | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Statistic)
  @nestAccessControl.UseRoles({
    resource: "Statistic",
    action: "create",
    possession: "any",
  })
  async createStatistic(
    @graphql.Args() args: CreateStatisticArgs
  ): Promise<Statistic> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Statistic)
  @nestAccessControl.UseRoles({
    resource: "Statistic",
    action: "update",
    possession: "any",
  })
  async updateStatistic(
    @graphql.Args() args: UpdateStatisticArgs
  ): Promise<Statistic | null> {
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

  @graphql.Mutation(() => Statistic)
  @nestAccessControl.UseRoles({
    resource: "Statistic",
    action: "delete",
    possession: "any",
  })
  async deleteStatistic(
    @graphql.Args() args: DeleteStatisticArgs
  ): Promise<Statistic | null> {
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
  @graphql.ResolveField(() => [User], { name: "user" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async resolveFieldUser(
    @graphql.Parent() parent: Statistic,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUser(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
