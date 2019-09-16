export function isHoliday(): boolean {
    const today = new Date();

    const dayIndex = today.getDay();
    if (dayIndex == 0 || dayIndex == 6) {
        return true;
    }

    const id = "ja.japanese#holiday@group.v.calendar.google.com";
    const calendar = CalendarApp.getCalendarById(id);
    const events = calendar.getEventsForDay(today);
    if (events.length != 0) {
        return true;
    }

    return false;
}
