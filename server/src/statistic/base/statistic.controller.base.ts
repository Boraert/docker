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
import { StatisticService } from "../statistic.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { StatisticCreateInput } from "./StatisticCreateInput";
import { StatisticWhereInput } from "./StatisticWhereInput";
import { StatisticWhereUniqueInput } from "./StatisticWhereUniqueInput";
import { StatisticFindManyArgs } from "./StatisticFindManyArgs";
import { StatisticUpdateInput } from "./StatisticUpdateInput";
import { Statistic } from "./Statistic";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class StatisticControllerBase {
  constructor(
    protected readonly service: StatisticService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Statistic })
  @nestAccessControl.UseRoles({
    resource: "Statistic",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: StatisticCreateInput): Promise<Statistic> {
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
        boughtDeals: true,
        createdAt: true,
        id: true,
        month: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        websiteVisitors: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Statistic] })
  @ApiNestedQuery(StatisticFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Statistic",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Statistic[]> {
    const args = plainToClass(StatisticFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        boughtDeals: true,
        createdAt: true,
        id: true,
        month: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        websiteVisitors: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Statistic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Statistic",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: StatisticWhereUniqueInput
  ): Promise<Statistic | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        boughtDeals: true,
        createdAt: true,
        id: true,
        month: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        websiteVisitors: true,
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
  @swagger.ApiOkResponse({ type: Statistic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Statistic",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: StatisticWhereUniqueInput,
    @common.Body() data: StatisticUpdateInput
  ): Promise<Statistic | null> {
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
          boughtDeals: true,
          createdAt: true,
          id: true,
          month: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          websiteVisitors: true,
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
  @swagger.ApiOkResponse({ type: Statistic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Statistic",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: StatisticWhereUniqueInput
  ): Promise<Statistic | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          boughtDeals: true,
          createdAt: true,
          id: true,
          month: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          websiteVisitors: true,
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
