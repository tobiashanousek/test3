
import classses from './ContactUsLinks.module.css';


const ContactUsLinks: React.FC = () => {
    return (
        <>
        <p className={classses.heading} >Kontaktujte nás</p>
        <ul className={classses.list}>
            <li><a href="mailto:info@odtahniTo.cz" className={classses.link} >Email:  info@odtahniTo.cz</a></li>
            <li><a href="tel:+420123456789" className={classses.link}>Telefon: +420 123 456 789</a></li> 
        </ul>
        
        </>
        
    );
    }
export default ContactUsLinks;