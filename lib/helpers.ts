import { format } from "date-fns";
import { ru } from "date-fns/locale";

/**
 * Форматирует дату из вида "2025-03-02T14:39:00Z" в формат "d MMMM yyyy, HH:mm"
 * @param {string} dateString
 * @returns {string}
 */
export const formatDateString = (dateString: string): string => {
  return format(new Date(dateString), "d MMMM yyyy, HH:mm", { locale: ru });
};
