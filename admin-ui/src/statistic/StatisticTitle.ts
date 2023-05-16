import { Statistic as TStatistic } from "../api/statistic/Statistic";

export const STATISTIC_TITLE_FIELD = "userId";

export const StatisticTitle = (record: TStatistic): string => {
  return record.userId || String(record.id);
};
