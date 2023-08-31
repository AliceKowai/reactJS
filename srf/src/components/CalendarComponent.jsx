import React, { useState } from 'react';


import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import * as bootstrap from "bootstrap"
import "bootstrap/dist//css/bootstrap.min.css"


import styles from './CalendarComponent.jsx'

const buttonText = {
    today:    'Hoje',
    month:    'Mês',
    week:     'Semana',
    day:      'Dia',
    list:     'list'
}


const   CalendarComponent = () => {
    const [dataHora, setDataHora] = useState("")
    const [events,setEvents] = useState([
        {
            title: 'Dormir',
            start: '2023-05-01'+ 'T12:00:00',
            end: '01-05-2023' + 'T12:30:00',
            description: 'Dormir bonitinha bem quentinha ',
        },
        {
            title: 'Falar',
            start: '2023-05-01',
            end: '2023-05-01',
        },
        {
            title: 'Dormir',
            start: '2023-05-01'+ 'T12:00:00',
            end: '01-05-2023' + 'T12:30:00',
            description: 'Dormir bonitinha bem quentinha ',
        },
        {
            title: 'Falar',
            start: '2023-05-01',
            end: '2023-05-01',
        },
        {
            title: 'Dormir',
            start: '2023-05-01'+ 'T12:00:00',
            end: '01-05-2023' + 'T12:30:00',
            description: 'Dormir bonitinha bem quentinha ',
        },
        {
            title: 'Falar',
            start: '2023-05-01',
            end: '2023-05-01',
        },
        {
            title: 'Dormir',
            start: '2023-05-01'+ 'T12:00:00',
            end: '01-05-2023' + 'T12:30:00',
            description: 'Dormir bonitinha bem quentinha ',
        },
        {
            title: 'Falar',
            start: '2023-05-01',
            end: '2023-05-01',
        },
        {
            title: 'Dormir',
            start: '2023-05-01'+ 'T12:00:00',
            end: '01-05-2023' + 'T12:30:00',
            description: 'Dormir bonitinha bem quentinha ',
        },
        {
            title: 'Falar',
            start: '2023-05-01',
            end: '2023-05-01',
        },
    ]);

    const handleDateClick = (info) => {
        setDataHora(info.dateStr)
        console.log(dataHora);


      };
      

    return (
       <div className={styles.container_calendar}>
         <FullCalendar
            className={styles.essa}
            plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: 'today, prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            locale="br"
            slotMinTime="07:00:00"
            slotMaxTime="20:00:00"
            height={"70vh"}
            editable={true}
            themeSystem= 'bootstrap'
            buttonText={buttonText}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            navLinks= {true}
            dateClick={handleDateClick}           
            events={events}
            eventDidMount={(info) =>{
                return new bootstrap.Popover(info.el,{
                    title: info.event.title,
                    placement:"auto",
                    trigger:"hover",
                    customClass: "popoverStyle",
                    content: info.event.extendedProps.description? info.event.extendedProps.description + info.event.start : '',                    
                    html: true
                })
                popover.update();
            }}
            />
        </div>
    );
};



export default CalendarComponent