import './sliderC.scss';
import { Link } from 'react-router-dom';
import { BoxUnderToTop } from '../../BoxAnimate/BoxAnimate';

const SliderC = () => {

    return (
        <div className='sliderC'>
            <BoxUnderToTop>
                <img className='separatorA' src="separatorA.png" alt="separatorA" />
            </BoxUnderToTop>
            <BoxUnderToTop>
                <p className='silerA-pa'>Bienvenidos</p>
            </BoxUnderToTop>
            <BoxUnderToTop>
                <h1>Centro de Masaje y terapia</h1>
            </BoxUnderToTop>
            <BoxUnderToTop>
                <p>Vas a querer volver a sentirte mas jóven</p>
            </BoxUnderToTop>
            <Link to={'/getShifts'} className='btn-a'>Pide tu cita</Link>
        </div>
    );
};

export default SliderC;