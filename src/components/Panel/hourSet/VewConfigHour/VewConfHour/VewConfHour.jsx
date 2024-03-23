import './vewConfHour.scss';
import { useEffect, useState } from 'react';

const VewConfHour = ({ config, updateSelectedHour }) => {

    const [hourInfo, setHourInfo] = useState({ open: '', closed: '', fragment: '' });

    useEffect(() => {
    if (config) {
        setHourInfo(prevHourInfo => ({ 
            ...prevHourInfo,
            open: config.hours.time.open, 
            closed: config.hours.time.closed, 
            fragment: config.hours.fragment 
        }));
    }
}, [config]);


    const handleHourChange = (e) => {
        const updatedHourInfo = { ...hourInfo, [e.target.name]: e.target.value };
        setHourInfo(updatedHourInfo);
        updateSelectedHour(updatedHourInfo);
    };

    return (
        <div className='vewConfHour'>
            <h4>Selección de Horas</h4>
            <div>
                <label>Hora de inicio</label>
                <input type="text" name='open' value={hourInfo.open} onChange={handleHourChange} placeholder='de 0 a 24' />
            </div>
            <div>
                <label>Hora de cierre</label>
                <input type="text" name='closed' value={hourInfo.closed} onChange={handleHourChange} placeholder='de 0 a 24' />
            </div>
            <div>
                <label>Duración del turno</label>
                <input type="text" name='fragment' value={hourInfo.fragment} onChange={handleHourChange} placeholder='en minutos' />
            </div>
        </div>
    );
};

export default VewConfHour;