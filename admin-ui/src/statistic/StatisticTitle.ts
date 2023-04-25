import { Statistic as TStatistic } from "../api/statistic/Statistic";

export const STATISTIC_TITLE_FIELD = "id";

export const StatisticTitle = (record: TStatistic): string => {
  return record.id || String(record.id);
};
