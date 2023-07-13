/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CampaignDetail, User } from "@prisma/client";

export class CampaignDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CampaignDetailCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignDetailCountArgs>
  ): Promise<number> {
    return this.prisma.campaignDetail.count(args);
  }

  async findMany<T extends Prisma.CampaignDetailFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignDetailFindManyArgs>
  ): Promise<CampaignDetail[]> {
    return this.prisma.campaignDetail.findMany(args);
  }
  async findOne<T extends Prisma.CampaignDetailFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignDetailFindUniqueArgs>
  ): Promise<CampaignDetail | null> {
    return this.prisma.campaignDetail.findUnique(args);
  }
  async create<T extends Prisma.CampaignDetailCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignDetailCreateArgs>
  ): Promise<CampaignDetail> {
    return this.prisma.campaignDetail.create<T>(args);
  }
  async update<T extends Prisma.CampaignDetailUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignDetailUpdateArgs>
  ): Promise<CampaignDetail> {
    return this.prisma.campaignDetail.update<T>(args);
  }
  async delete<T extends Prisma.CampaignDetailDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignDetailDeleteArgs>
  ): Promise<CampaignDetail> {
    return this.prisma.campaignDetail.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.campaignDetail
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
