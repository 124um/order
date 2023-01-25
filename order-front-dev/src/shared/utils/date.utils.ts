const dateUtils = {
  format() {
    return '';
  },

  formatLocaleDate(date: Date, locale: string) {
    return new Intl.DateTimeFormat(locale).format(date);
  },

  dateUtc(date: string): Date {
    const dateObj = new Date(date);
    const userTimezoneOffset = dateObj.getTimezoneOffset() * 60000;
    return new Date(dateObj.getTime() + userTimezoneOffset);
  },
};

export default dateUtils;
