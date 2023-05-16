/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Statistic, User } from "@prisma/client";

export class StatisticServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.StatisticFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StatisticFindManyArgs>
  ): Promise<number> {
    return this.prisma.statistic.count(args);
  }

  async findMany<T extends Prisma.StatisticFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StatisticFindManyArgs>
  ): Promise<Statistic[]> {
    return this.prisma.statistic.findMany(args);
  }
  async findOne<T extends Prisma.StatisticFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StatisticFindUniqueArgs>
  ): Promise<Statistic | null> {
    return this.prisma.statistic.findUnique(args);
  }
  async create<T extends Prisma.StatisticCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StatisticCreateArgs>
  ): Promise<Statistic> {
    return this.prisma.statistic.create<T>(args);
  }
  async update<T extends Prisma.StatisticUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StatisticUpdateArgs>
  ): Promise<Statistic> {
    return this.prisma.statistic.update<T>(args);
  }
  async delete<T extends Prisma.StatisticDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StatisticDeleteArgs>
  ): Promise<Statistic> {
    return this.prisma.statistic.delete(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.statistic
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }
}