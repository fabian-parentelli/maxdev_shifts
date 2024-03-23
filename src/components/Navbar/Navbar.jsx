import './nav.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PendingIcon from '@mui/icons-material/Pending';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navClassName = `nav ${scrolled ? 'colorVew' : 'transparent'}`;
    const navListClassName = `navList ${isMenuOpen ? 'navListOpen' : 'navListClosed'}`;

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <div className={navClassName}>
            <img className='logo' src='logo.png' alt="logo" />
            <div className={navListClassName}>
                <Link to={'/'} onClick={toggleMenu}>Inicio</Link>
                <a href='#us' onClick={toggleMenu}>Nosotros</a>
                <a href='#coleccion' onClick={toggleMenu}>Colección</a>
                <a href='#form' onClick={toggleMenu}>Contacto</a>
                <Link to={'/panel'} onClick={toggleMenu}><PendingIcon /></Link>
            </div>
            <MenuIcon className='menu' onClick={toggleMenu} />
        </div>
    );
};

export default NavBar;