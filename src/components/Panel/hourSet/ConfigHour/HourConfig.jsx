import './hourConfig.scss';
import Load from '../../../utils/Load';
import { useEffect, useState } from 'react';
import DaysSelected from './DaysSelected/DaysSelected';
import HourSelected from './HourSelected/HourSelected';
import SnackbarAlert from '../../../utils/Alerts';
import { getAllShiftsApi } from '../../../../helpers/shifts/getShifts.api.js'
import { Link } from 'react-router-dom';

const HourConfig = ({ setShift, loading, open, message }) => {

    const [selectedDays, setSelectedDays] = useState([]);
    const [hour, setHour] = useState({ open: '', closed: '', fragment: '' });
    const [exists, setExists] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            days: selectedDays,
            hours: {
                time: {
                    open: +hour.open,
                    closed: +hour.closed
                },
                fragment: +hour.fragment
            },
        };
        setShift(obj);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllShiftsApi();
            if (!response.error) setExists(true);
        }; fetchData();
    }, []);

    const updateSelectedDays = (days) => setSelectedDays(days);
    const updateSelectedHour = (hour) => setHour(hour);

    return (
        <div className='hourConfig'>
            <h2>Configura tus días y horarios.</h2>
            <form onSubmit={handleSubmit}>
                <div className='hourConfig-data'>
                    <DaysSelected onDaysChange={updateSelectedDays} />
                    <HourSelected updateSelectedHour={updateSelectedHour} />
                </div>
                {exists ?
                    <div className='btnDiv'>
                        <p>Ya tienes una configuracion</p>
                        <Link className='btn lin' to={'/panel/vewShift'}>Ver Configuración</Link>
                    </div>
                    : <button className='btn' type="submit">Configurar</button>
                }
            </form>
            <Load loading={loading} />
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default HourConfig;