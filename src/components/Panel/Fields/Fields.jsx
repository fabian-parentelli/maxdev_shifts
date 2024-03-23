import './fields.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Fields = ({title, category}) => {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, []);

    const handleTogger = () => setToggle(!toggle);

    return (
        <div className='fields'>
            <button className='btn' onClick={handleTogger}>
                {title}
                <ArrowForwardIosIcon className='arrow' style={{ transform: toggle && 'rotate(90deg)'  }} />
            </button>
            <ul className={`accordion ${toggle ? 'animated' : ''}`} ref={refHeight}
                style={{ height: toggle ? `${heightEl}` : "0px" }}
            >
                {category.map((cat, index) => (
                    <Link className='linkData' key={index} to={cat.path} onClick={handleTogger}><li>{cat.name}</li></Link>
                ))}
            </ul>
        </div>
    );
};

export default Fields;