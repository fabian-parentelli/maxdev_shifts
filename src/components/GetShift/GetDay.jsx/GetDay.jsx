import './getDay.scss';
import moment from 'moment';
import es from 'date-fns/locale/es';
import DetePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';

const GetDay = ({ data, setShift }) => {

    const [days, setDays] = useState([]);
    useEffect(() => {
        if (data && data.days) {
            setDays(data.days);
        }
    }, [data]);

    const handleDateChange = (date) => {
        if (date) setShift(prevShift => ({ ...prevShift, day: moment(date).locale('es').format('DD/MM/YY') }));
        else setShift(prevShift => ({ ...prevShift, day: moment().locale('es').format('DD/MM/YY') }));
    };

    const filterDate = (date) => {
        if (days) {
            const dayOfWeek = moment(date).format('dddd');
            return days.includes(dayOfWeek);
        };
    };

    return (
        <div className='getDay'>
            <h4>Elige una dia</h4>
            <DetePicker
                locale={es}
                dateFormat="dd MMMM"
                onChange={handleDateChange}
                minDate={new Date()}
                inline
                filterDate={filterDate}
            />
        </div>
    );
};

export default GetDay;