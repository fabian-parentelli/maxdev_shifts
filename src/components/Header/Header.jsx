import './header.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderA from './SliderA/SliderA';
import SliderB from './SliderB/SliderB';
import SliderC from './SliderC/SliderC';

const Header = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    return (
        <div className='header'>
            <Slider {...settings}>
                <div>
                    <SliderA />
                </div>
                <div>
                    <SliderB />
                </div>
                <div>
                    <SliderC />
                </div>
            </Slider>
        </div>
    );
};

export default Header;