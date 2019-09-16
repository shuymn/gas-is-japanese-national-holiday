export function isHoliday(date: Date = new Date()): boolean {
    const dayIndex = date.getDay();
    if (dayIndex == 0 || dayIndex == 6) {
        return true;
    }

    const id = "ja.japanese#holiday@group.v.calendar.google.com";
    const calendar = CalendarApp.getCalendarById(id);
    const events = calendar.getEventsForDay(date);
    if (events.length != 0) {
        return true;
    }

    return false;
}
