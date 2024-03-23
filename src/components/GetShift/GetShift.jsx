import './gitShift.scss';
import moment from 'moment';
import Load from '../utils/Load.jsx';
import { useEffect, useState } from 'react';
import GetHour from './GetHour.jsx/GetHour';
import GetDay from './GetDay.jsx/GetDay.jsx';
import { useNavigate } from 'react-router-dom';
import SnackbarAlert from '../utils/Alerts.jsx';
import CustomerShift from './CustomerShift/CustomerShift.jsx';
import { newShiftApi } from '../../helpers/shifts/newShift.api.js';
import { getAllShiftsApi } from '../../helpers/shifts/getShifts.api.js';
import GetService from './GetService/GetService.jsx';

const GitShift = () => {

    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [shift, setShift] = useState({
        day: moment().locale('es').format('DD/MM/YY'),
        hour: '',
        customer: {
            name: '',
            address: '',
            email: '',
            phone: ''
        },
        service: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await getAllShiftsApi();
            setData(response);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (shift.hour === '') {
            setMessage({ status: 'error', mess: 'No seleccionaste una hora' });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 2000);
            setLoading(false);
        };
        const response = await newShiftApi(shift);
        if (response) {
            setOpen(true);
            setMessage({ status: 'success', mess: 'Turno agendado, revisa tu email' });
            setTimeout(() => { navigate('/') }, 2000);
        };
    };
 
    return (
        <div className='gitShift'>
            <div className='place'></div>
            <h2>Elige un turno</h2>
            <form onSubmit={handleSubmit}>
                <div className='setForm'>
                    <GetDay data={data} setShift={setShift} />
                    <GetHour data={data} setShift={setShift} shift={shift} />
                    <CustomerShift setShift={setShift} />
                    <GetService setShift={setShift} />
                </div>
                <button className='btn'>Seleccionar</button>
            </form>
            <SnackbarAlert message={message} open={open} />
            <Load loading={loading} />
        </div>
    );
};

export default GitShift;