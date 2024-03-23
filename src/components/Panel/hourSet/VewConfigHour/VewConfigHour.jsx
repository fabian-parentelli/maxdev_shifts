import './vewConfigShifts.scss';
import { useEffect, useState } from 'react';
import VewConfDay from './VewConfDay/VewConfDay.jsx';
import VewConfHour from './VewConfHour/VewConfHour.jsx';
import { getAllShiftsApi } from '../../../../helpers/shifts/getShifts.api.js';
import { updateConfShiftApi } from '../../../../helpers/shifts/updateConfShift.api.js';
import Load from '../../../utils/Load.jsx';
import SnackbarAlert from '../../../utils/Alerts.jsx';
import { useNavigate } from 'react-router-dom';

const VewConfigHour = () => {

    const [config, setConfig] = useState(null);
    const [shift, setShift] = useState(null);
    const [selectedDays, setSelectedDays] = useState([]);
    const [hour, setHour] = useState({ open: '', closed: '', fragment: '' });

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await getAllShiftsApi();
            setConfig(response);
            setSelectedDays(response.days);
            setHour({
                open: response.hours.time.open,
                closed: response.hours.time.closed,
                fragment: response.hours.fragment
            });
            setLoading(false);
        }; fetchData();
    }, []);

    useEffect(() => {
        setLoading(true);
        if (shift) {
            const fetchData = async () => {
                const response = await updateConfShiftApi(config._id, shift);
                if (response.error) {
                    setLoading(false);
                    setOpen(true);
                    setMessage({ status: 'error', mess: response.error });
                    setTimeout(() => { setOpen(false) }, 2000);
                } else {
                    setLoading(false);
                    setOpen(true);
                    setMessage({ status: 'success', mess: 'Configuracion correcta' });
                    setTimeout(() => { navigate('/panel') }, 2000);
                };
            }; fetchData();
        };
    }, [shift]);

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

    const updateSelectedDays = (days) => setSelectedDays(days);
    const updateSelectedHour = (hour) => setHour(hour);

    return (
        <div className='vewConfigShifts'>
            <h2>Visualiza tu configuracion o modifícala</h2>
            <form onSubmit={handleSubmit}>
                <div className='vwData'>
                    <VewConfDay config={config} updateSelectedDays={updateSelectedDays} />
                    <VewConfHour config={config} updateSelectedHour={updateSelectedHour} />
                </div>
                <button className='btn'>Actualiza</button>
            </form>
            <Load loading={loading} />
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default VewConfigHour;