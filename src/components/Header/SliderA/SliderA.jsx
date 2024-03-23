import './sliderA.scss';
import { Link } from 'react-router-dom';
import { BoxUnderToTop } from '../../BoxAnimate/BoxAnimate';

const SliderA = () => {

    return (
        <div className='sliderA'>
            <BoxUnderToTop>
                <img className='separatorA' src="separatorA.png" alt="separatorA" />
            </BoxUnderToTop>
            <BoxUnderToTop>
                <p className='silerA-pa'>Visita una de nuestras múltiples</p>
            </BoxUnderToTop>
            <BoxUnderToTop>
                <h1>Sesiones de relajación</h1>
            </BoxUnderToTop>
            <BoxUnderToTop>
                <p>Te debes este momento. Pide una cita con nosotros</p>
            </BoxUnderToTop>
            <Link to={'/getShifts'} className='btn-a'>Pide tu cita</Link>
        </div>
    );
};

export default SliderA;