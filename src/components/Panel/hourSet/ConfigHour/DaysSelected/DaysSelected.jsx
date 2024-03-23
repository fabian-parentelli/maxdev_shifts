import './daysSelected.scss';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const DaysSelected = ({ onDaysChange }) => {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const [checkedDays, setCheckedDays] = useState(days.reduce((acc, day) => ({ ...acc, [day]: false }), {}));

    const handleCheckboxChange = (e) => {
        const newCheckedDays = { ...checkedDays, [e.target.name]: e.target.checked };
        setCheckedDays(newCheckedDays);
        const selected = Object.entries(newCheckedDays).filter(([day, isChecked]) => isChecked).map(([day]) => day);
        onDaysChange(selected);
    };

    return (
        <div className='DaysSelected'>
            <h4>Selecciona los dias</h4>
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

export default DaysSelected;