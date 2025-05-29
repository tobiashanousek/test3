
import Input from "../input/Input";
import InputArea from "../input/InputArea";

import classes from "./ContactForm.module.css";

const ContactForm: React.FC = () => {

    return(
        <form className={classes.container}>
                <Input label="Jméno a příjmení"/>
                <Input label="Email"/>
                <InputArea label="Zpráva"/>
                <button className={classes.formBtn}>Odeslat</button>
        </form>
    );

}

export default ContactForm;