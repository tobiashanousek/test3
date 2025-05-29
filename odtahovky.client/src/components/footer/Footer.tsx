//CSS
import classes from './Footer.module.css';
//Icons
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";


//Footer stránky
const Footer: React.FC = () => {
    return (
        <footer className={classes.footer}>
            <ul className={classes.list}>
                <li>kontaktujte nás:</li>
                <li><a className={classes.link} href='mailto:info@odtahniTo.cz'>info@odtahniTo.cz</a></li>
                <li><a className={classes.link} href='tel:+420123456789'>+420 123 456 789</a></li>
            </ul>
            <div className={classes.social}>
                <p>Socialní sítě:</p>
                <div className={classes.social__icons}>
                    <FiInstagram size={24}/>
                    <FiFacebook size={24}/>
                    <FiLinkedin size={24}/>
                </div>
            </div>
            <div className={classes.author}>
                Created by Tomáš David
            </div>
        </footer>
    );
    }

export default Footer;