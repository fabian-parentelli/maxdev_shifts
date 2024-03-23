import './getHour.scss';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { getCustShiftsApi } from '../../../helpers/shifts/getCustShift.api.js';

const GetHour = ({ data, setShift, shift }) => {
    const [hours, setHours] = useState([]);
    const [selectedHour, setSelectedHour] = useState(null);
    const [occupiedHours, setOccupiedHours] = useState([]);

    useEffect(() => {
        if (data && data.hours) {
            const { time } = data.hours;
            if (time) {
                const open = moment(time.open, 'HH:mm');
                const closed = moment(time.closed, 'HH:mm');
                let hourArray = [];
                let current = open.clone();
                while (current.isBefore(closed)) {
                    hourArray.push(current.format('HH:mm'));
                    current.add(data.hours.fragment, 'minutes');
                };
                hourArray = hourArray.filter(hr => !occupiedHours.includes(hr));
                setHours(hourArray);
            };
        };
    }, [data, occupiedHours]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getCustShiftsApi();
            const newOccupiedHours = response
                .filter(dat => shift.day === dat.day)
                .map(dat => dat.hour);
            setOccupiedHours(newOccupiedHours);
        };
        fetchData();
    }, [shift]);

    const handleHourSelection = (hour) => {
        setSelectedHour(hour === selectedHour ? null : hour);
        setShift(prevShift => ({ ...prevShift, hour: hour }));
    };

    return (
        <div className='getHour'>
            <h4>Elige una hora</h4>
            {hours.map((hour, index) => (
                <div className='getHourSets' key={index}>
                    <Checkbox
                        checked={hour === selectedHour}
                        onChange={() => handleHourSelection(hour)}
                    />
                    <span>{hour}</span>
                </div>
            ))}
        </div>
    );
};

export default GetHour;
