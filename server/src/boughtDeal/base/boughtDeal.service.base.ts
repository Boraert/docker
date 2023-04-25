/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, BoughtDeal, User } from "@prisma/client";

export class BoughtDealServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BoughtDealFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BoughtDealFindManyArgs>
  ): Promise<number> {
    return this.prisma.boughtDeal.count(args);
  }

  async findMany<T extends Prisma.BoughtDealFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BoughtDealFindManyArgs>
  ): Promise<BoughtDeal[]> {
    return this.prisma.boughtDeal.findMany(args);
  }
  async findOne<T extends Prisma.BoughtDealFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BoughtDealFindUniqueArgs>
  ): Promise<BoughtDeal | null> {
    return this.prisma.boughtDeal.findUnique(args);
  }
  async create<T extends Prisma.BoughtDealCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BoughtDealCreateArgs>
  ): Promise<BoughtDeal> {
    return this.prisma.boughtDeal.create<T>(args);
  }
  async update<T extends Prisma.BoughtDealUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BoughtDealUpdateArgs>
  ): Promise<BoughtDeal> {
    return this.prisma.boughtDeal.update<T>(args);
  }
  async delete<T extends Prisma.BoughtDealDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BoughtDealDeleteArgs>
  ): Promise<BoughtDeal> {
    return this.prisma.boughtDeal.delete(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.boughtDeal
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }
}
