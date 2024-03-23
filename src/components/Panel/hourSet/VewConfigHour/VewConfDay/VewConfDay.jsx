import './vewConfDay.scss';
import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';

const VewConfDay = ({ config, updateSelectedDays }) => {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const [checkedDays, setCheckedDays] = useState(days.reduce((acc, day) => ({ ...acc, [day]: false }), {}));

    useEffect(() => {
        if (config && config.days) {
            const updatedCheckedDays = { ...checkedDays };
            config.days.forEach((d) => {
                const toSpanish = translateToSpanish(d);
                updatedCheckedDays[toSpanish] = true;
            });
            setCheckedDays(updatedCheckedDays);
        };
    }, [config]);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCheckedDays(prevState => {
            const newCheckedDays = { ...prevState, [name]: checked };
            const selectedDays = Object.keys(newCheckedDays).filter(day => newCheckedDays[day]);
            updateSelectedDays(selectedDays);
            return newCheckedDays;
        });
    };

    return (
        <div className='vewConfDay'>
            <h4>Selecciona los días</h4>
            {days.map((day) => (
                <div className='days' key={day}>
                    <Checkbox
                        checked={checkedDays[day]}
                        onChange={handleCheckboxChange}
                        name={day}
                        color="primary"
                    />
                    <p>{day}</p>
                </div>
            ))}
        </div>
    );
};

export default VewConfDay;

const translateToSpanish = (dayInEnglish) => {
    switch (dayInEnglish) {
        case 'Monday':
            return 'Lunes';
        case 'Tuesday':
            return 'Martes';
        case 'Wednesday':
            return 'Miércoles';
        case 'Thursday':
            return 'Jueves';
        case 'Friday':
            return 'Viernes';
        case 'Saturday':
            return 'Sábado';
        case 'Sunday':
            return 'Domingo';
        default:
            return '';
    };
};