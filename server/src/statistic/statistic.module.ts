import { Module } from "@nestjs/common";
import { StatisticModuleBase } from "./base/statistic.module.base";
import { StatisticService } from "./statistic.service";
import { StatisticController } from "./statistic.controller";
import { StatisticResolver } from "./statistic.resolver";

@Module({
  imports: [StatisticModuleBase],
  controllers: [StatisticController],
  providers: [StatisticService, StatisticResolver],
  exports: [StatisticService],
})
export class StatisticModule {}
