/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CampaignService } from "../campaign.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CampaignCreateInput } from "./CampaignCreateInput";
import { CampaignWhereInput } from "./CampaignWhereInput";
import { CampaignWhereUniqueInput } from "./CampaignWhereUniqueInput";
import { CampaignFindManyArgs } from "./CampaignFindManyArgs";
import { CampaignUpdateInput } from "./CampaignUpdateInput";
import { Campaign } from "./Campaign";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CampaignControllerBase {
  constructor(
    protected readonly service: CampaignService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Campaign })
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: CampaignCreateInput): Promise<Campaign> {
    return await this.service.create({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        campaignDuration: true,
        campaignHeadline: true,
        createdAt: true,
        description: true,
        id: true,
        images: true,
        quantity: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Campaign] })
  @ApiNestedQuery(CampaignFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Campaign[]> {
    const args = plainToClass(CampaignFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        campaignDuration: true,
        campaignHeadline: true,
        createdAt: true,
        description: true,
        id: true,
        images: true,
        quantity: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Campaign })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: CampaignWhereUniqueInput
  ): Promise<Campaign | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        campaignDuration: true,
        campaignHeadline: true,
        createdAt: true,
        description: true,
        id: true,
        images: true,
        quantity: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Campaign })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: CampaignWhereUniqueInput,
    @common.Body() data: CampaignUpdateInput
  ): Promise<Campaign | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          campaignDuration: true,
          campaignHeadline: true,
          createdAt: true,
          description: true,
          id: true,
          images: true,
          quantity: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Campaign })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: CampaignWhereUniqueInput
  ): Promise<Campaign | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          campaignDuration: true,
          campaignHeadline: true,
          createdAt: true,
          description: true,
          id: true,
          images: true,
          quantity: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
