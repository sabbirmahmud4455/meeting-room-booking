import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarView = ({meetings}) => {
  const events = meetings.map(meeting => {
                    return {
                        title: moment(meeting.start, "HH:mm:ss").format("h:mm A") + " to " + moment(meeting.end, "HH:mm:ss").format("h:mm A"),
                        start: moment(meeting.date + "T" + meeting.start).toDate(),
                        end: moment(meeting.date + "T" + meeting.end).toDate(),
                    };
                });

    // Custom event styles
    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
        fontSize: "14px",
        padding: "0px 2px",
        };
        return { style };
    };

    return (
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            views={{ month: true, day:true }} // Enable month view
            defaultView="month"
            selectable
            drilldownView="day" // Set the default drill-down view to day view
            eventPropGetter={eventStyleGetter}
            style={{ height: "500px" }} // Set a fixed height to ensure visibility
        />
    );
};

export default CalendarView;
