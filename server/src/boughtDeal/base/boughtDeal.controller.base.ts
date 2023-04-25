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
import { BoughtDealService } from "../boughtDeal.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BoughtDealCreateInput } from "./BoughtDealCreateInput";
import { BoughtDealWhereInput } from "./BoughtDealWhereInput";
import { BoughtDealWhereUniqueInput } from "./BoughtDealWhereUniqueInput";
import { BoughtDealFindManyArgs } from "./BoughtDealFindManyArgs";
import { BoughtDealUpdateInput } from "./BoughtDealUpdateInput";
import { BoughtDeal } from "./BoughtDeal";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BoughtDealControllerBase {
  constructor(
    protected readonly service: BoughtDealService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BoughtDeal })
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: BoughtDealCreateInput
  ): Promise<BoughtDeal> {
    return await this.service.create({
      data: data,
      select: {
        april: true,
        august: true,
        createdAt: true,
        december: true,
        february: true,
        id: true,
        january: true,
        july: true,
        june: true,
        march: true,
        may: true,
        november: true,
        october: true,
        september: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [BoughtDeal] })
  @ApiNestedQuery(BoughtDealFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<BoughtDeal[]> {
    const args = plainToClass(BoughtDealFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        april: true,
        august: true,
        createdAt: true,
        december: true,
        february: true,
        id: true,
        january: true,
        july: true,
        june: true,
        march: true,
        may: true,
        november: true,
        october: true,
        september: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BoughtDeal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: BoughtDealWhereUniqueInput
  ): Promise<BoughtDeal | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        april: true,
        august: true,
        createdAt: true,
        december: true,
        february: true,
        id: true,
        january: true,
        july: true,
        june: true,
        march: true,
        may: true,
        november: true,
        october: true,
        september: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: BoughtDeal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: BoughtDealWhereUniqueInput,
    @common.Body() data: BoughtDealUpdateInput
  ): Promise<BoughtDeal | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          april: true,
          august: true,
          createdAt: true,
          december: true,
          february: true,
          id: true,
          january: true,
          july: true,
          june: true,
          march: true,
          may: true,
          november: true,
          october: true,
          september: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: BoughtDeal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: BoughtDealWhereUniqueInput
  ): Promise<BoughtDeal | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          april: true,
          august: true,
          createdAt: true,
          december: true,
          february: true,
          id: true,
          january: true,
          july: true,
          june: true,
          march: true,
          may: true,
          november: true,
          october: true,
          september: true,
          updatedAt: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/user")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findManyUser(
    @common.Req() request: Request,
    @common.Param() params: BoughtDealWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUser(params.id, {
      ...query,
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/user")
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "update",
    possession: "any",
  })
  async connectUser(
    @common.Param() params: BoughtDealWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/user")
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "update",
    possession: "any",
  })
  async updateUser(
    @common.Param() params: BoughtDealWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/user")
  @nestAccessControl.UseRoles({
    resource: "BoughtDeal",
    action: "update",
    possession: "any",
  })
  async disconnectUser(
    @common.Param() params: BoughtDealWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      user: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
