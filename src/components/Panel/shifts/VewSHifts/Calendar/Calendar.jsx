import './calendarM.scss';
import moment from 'moment';
import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AlertDialog from '../../../../utils/AlertDialog';

const CalendarM = ({ shiftConfig, shift }) => {
    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const newEvents = shift.map((sh) => ({
            title: `${sh.customer.name} - ${sh.service.name}`,
            start: moment(`${sh.day} ${sh.hour}`, 'DD/MM/YY HH:mm').toISOString(),
            end: moment(`${sh.day} ${sh.hour}`, 'DD/MM/YY HH:mm').add(shiftConfig.hours.fragment, 'minutes').toISOString(),
            description: sh
        }));
        setEvents(newEvents);
    }, [shift, shiftConfig]);

    const handleEventClick = (clickInfo) => {
        setOpen(true);
        setMessage(clickInfo.event.extendedProps);
    };

    return (
        <div className="calendarM">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                events={events}
                slotMinTime={`${shiftConfig.hours.time.open}:00:00`}
                slotMaxTime={`${shiftConfig.hours.time.closed}:00:00`}
                expandRows={true}
                allDaySlot={false}
                locale={'es'}
                slotDuration={`00:${shiftConfig.hours.fragment}:00`}
                slotLabelInterval={{ minutes: shiftConfig.hours.fragment }}
                slotLabelFormat={{ hour: 'numeric', minute: '2-digit' }}
                eventColor='#35374B'
                buttonText={{ today: 'hoy', day: 'día', month: 'mes', week: 'semanas', prev: 'anterior', next: 'siguiente' }}
                eventClick={handleEventClick}
            />
            <AlertDialog open={open} setOpen={setOpen} message={message} />
        </div>
    );
};

export default CalendarM;