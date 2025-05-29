//React
import { Link } from 'react-router-dom';
import { useState } from 'react';
//Assets
import logo  from '../../assets/logo.svg';

//CSS
import classes from './Navbar.module.css';

//Ikony
import { FiMenu } from "react-icons/fi";
import { FiUser } from "react-icons/fi";




//Navigace stránky
const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <nav className={classes.nav}>
            
           <Link to="/"><img src={logo} alt="Logo"  className={classes.logo}/></Link> 
            <menu className={isOpen ? `${classes.menu}` : `${classes.menu__toggle}`}>
                <li className={classes.menu__item}>
                    <Link className={classes.menu__link} to="/">Home</Link>
                </li>
                <li className={classes.menu__item}>
                    <Link className={classes.menu__link} to="/services">Služby</Link>
                </li>
                <li className={classes.menu__item}>
                    <Link className={classes.menu__link} to="/prices">Ceník</Link>
                </li>
                <li className={classes.menu__item}>
                    <Link className={classes.menu__link} to="/about-us">O nás</Link>
                </li>
                <li className={classes.menu__item}>
                    <Link className={classes.menu__link} to="/contact">Kontakt</Link>
                </li>
            </menu>
            <div className={classes.icon_menu}>
                <Link to={'/login'} className={classes.button}>{<FiUser  className={classes.icon} />}</Link>
                <button onClick={() => setIsOpen(!isOpen)} className={classes.button}>{<FiMenu  className={classes.icon} />}</button>
            </div>

            <div className={classes.menu__dektop}>
                <menu className={classes.menu}>
                    <li className={classes.menu__item}>
                        <Link className={classes.menu__link} to="/login">Přihlásit</Link>
                    </li>
                    <li className={classes.menu__item}>
                        <Link className={classes.menu__link} to="/register">Registrovat</Link>
                    </li>
                    
                </menu>
            </div>

        </nav>
    );
}

export default Navbar;