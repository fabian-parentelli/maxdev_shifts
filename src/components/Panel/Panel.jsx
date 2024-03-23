import './panel.scss';
import Fields from './Fields/Fields';
import { Routes, Route } from 'react-router-dom';
import NewService from './services/NewService/NewService';
import GetService from './services/GetService/GetService';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useState } from 'react';
import UpdateService from './services/UpdateService/UpdateService';
import ConfHour from './hourSet/ConfigHour/ConfigHour';
import VewConfigHour from './hourSet/VewConfigHour/VewConfigHour';
import VewShifts from './shifts/VewSHifts/VewShifts';

const Panel = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='panel'>
            <div className='topDiv'></div>
            <div className='panelContainer'>
                <div className={`panelA ${isOpen ? 'isClosed' : ''}`}>
                    <h2>Consola</h2>
                    <Fields title={'Servicio'} category={[{ name: 'ver', path: 'getService' }, { name: 'crear', path: 'newService' }]} />
                    <Fields title={'Conf. Horario'} category={[{ name: 'ver', path: 'vewConfHour' }, { name: 'crear', path: 'configHour' }]} />
                    <Fields title={'Turnos'} category={[{ name: 'ver', path: 'vewShift' }, { name: 'Estadística', path: '' }]} />
                </div>
                <Routes>
                    <Route path='/newService' element={<NewService />} />
                    <Route path='/getService' element={<GetService />} />
                    <Route path='/updateService/:id' element={<UpdateService />} />
                    <Route path='/configHour' element={<ConfHour />} />
                    <Route path='/vewConfHour' element={<VewConfigHour />} />
                    <Route path='/vewShift' element={<VewShifts />} />
                </Routes>
            </div>

            <div onClick={handleIsOpen}>
                <AssignmentIcon className='icon' />
            </div>
        </div>
    );
};

export default Panel;