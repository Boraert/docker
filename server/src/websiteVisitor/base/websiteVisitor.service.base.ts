/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, WebsiteVisitor, User } from "@prisma/client";

export class WebsiteVisitorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WebsiteVisitorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebsiteVisitorFindManyArgs>
  ): Promise<number> {
    return this.prisma.websiteVisitor.count(args);
  }

  async findMany<T extends Prisma.WebsiteVisitorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebsiteVisitorFindManyArgs>
  ): Promise<WebsiteVisitor[]> {
    return this.prisma.websiteVisitor.findMany(args);
  }
  async findOne<T extends Prisma.WebsiteVisitorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebsiteVisitorFindUniqueArgs>
  ): Promise<WebsiteVisitor | null> {
    return this.prisma.websiteVisitor.findUnique(args);
  }
  async create<T extends Prisma.WebsiteVisitorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebsiteVisitorCreateArgs>
  ): Promise<WebsiteVisitor> {
    return this.prisma.websiteVisitor.create<T>(args);
  }
  async update<T extends Prisma.WebsiteVisitorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebsiteVisitorUpdateArgs>
  ): Promise<WebsiteVisitor> {
    return this.prisma.websiteVisitor.update<T>(args);
  }
  async delete<T extends Prisma.WebsiteVisitorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebsiteVisitorDeleteArgs>
  ): Promise<WebsiteVisitor> {
    return this.prisma.websiteVisitor.delete(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.websiteVisitor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }
}
