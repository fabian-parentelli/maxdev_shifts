import './sliderB.scss';
import { Link } from 'react-router-dom';
import { BoxUnderToTop } from '../../BoxAnimate/BoxAnimate';

const SliderB = () => {

    return (
        <div className='sliderB'>
            <BoxUnderToTop>
                <img className='separatorA' src="separatorA.png" alt="separatorA" />
            </BoxUnderToTop>
            <BoxUnderToTop>
                <p className='silerA-pa'>Masajes y terapias</p>
            </BoxUnderToTop>
            <BoxUnderToTop>
                <h1>Centro de SPA Cande</h1>
            </BoxUnderToTop>
            <BoxUnderToTop>
                <p>Ten tu momento de relax. Siempre hay tiempo para rejuvenecer tu cuerpo</p>
            </BoxUnderToTop>
            <Link to={'/getShifts'} className='btn-a'>Pide tu cita</Link>
        </div>
    );
};

export default SliderB;