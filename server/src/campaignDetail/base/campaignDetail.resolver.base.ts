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
import { CreateCampaignDetailArgs } from "./CreateCampaignDetailArgs";
import { UpdateCampaignDetailArgs } from "./UpdateCampaignDetailArgs";
import { DeleteCampaignDetailArgs } from "./DeleteCampaignDetailArgs";
import { CampaignDetailCountArgs } from "./CampaignDetailCountArgs";
import { CampaignDetailFindManyArgs } from "./CampaignDetailFindManyArgs";
import { CampaignDetailFindUniqueArgs } from "./CampaignDetailFindUniqueArgs";
import { CampaignDetail } from "./CampaignDetail";
import { User } from "../../user/base/User";
import { CampaignDetailService } from "../campaignDetail.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CampaignDetail)
export class CampaignDetailResolverBase {
  constructor(
    protected readonly service: CampaignDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CampaignDetail",
    action: "read",
    possession: "any",
  })
  async _campaignDetailsMeta(
    @graphql.Args() args: CampaignDetailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CampaignDetail])
  @nestAccessControl.UseRoles({
    resource: "CampaignDetail",
    action: "read",
    possession: "any",
  })
  async campaignDetails(
    @graphql.Args() args: CampaignDetailFindManyArgs
  ): Promise<CampaignDetail[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CampaignDetail, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CampaignDetail",
    action: "read",
    possession: "own",
  })
  async campaignDetail(
    @graphql.Args() args: CampaignDetailFindUniqueArgs
  ): Promise<CampaignDetail | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CampaignDetail)
  @nestAccessControl.UseRoles({
    resource: "CampaignDetail",
    action: "create",
    possession: "any",
  })
  async createCampaignDetail(
    @graphql.Args() args: CreateCampaignDetailArgs
  ): Promise<CampaignDetail> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CampaignDetail)
  @nestAccessControl.UseRoles({
    resource: "CampaignDetail",
    action: "update",
    possession: "any",
  })
  async updateCampaignDetail(
    @graphql.Args() args: UpdateCampaignDetailArgs
  ): Promise<CampaignDetail | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => CampaignDetail)
  @nestAccessControl.UseRoles({
    resource: "CampaignDetail",
    action: "delete",
    possession: "any",
  })
  async deleteCampaignDetail(
    @graphql.Args() args: DeleteCampaignDetailArgs
  ): Promise<CampaignDetail | null> {
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
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async resolveFieldUser(
    @graphql.Parent() parent: CampaignDetail
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
