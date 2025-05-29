import classes from './Socials.module.css';

import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Socials: React.FC = () => {
    return (
        <div className={classes.social}>
            <p className={classes.social__heading}>Sledujte nás na sociálních sítích</p>
            <div className={classes.social__icons}>
                    <FiInstagram size={32}/>
                    <FiFacebook size={32}/>
                    <FiLinkedin size={32}/>
            </div>
        </div>
    );
    }

export default Socials;