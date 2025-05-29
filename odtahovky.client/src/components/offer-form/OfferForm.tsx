import Input from "../input/Input";
import InputArea from "../input/InputArea";
import HorizontalPanel from "../panel/HorizontalPanel";
import classes from "./OfferForm.module.css";
import Dropdown from 'react-dropdown';
import ImgUpload from "../img-upload/ImgUpload";

const OfferForm: React.FC = () => {
    return (
            <form className={classes.container}>
                <HorizontalPanel>
                    <Input label="Jméno" />
                    <Input label="Tel. číslo" />
                    <Input label="Adresa" />
                    <Input label="Váha vozidla (Kg)" />
                    <InputArea label="Poznámka" />
                    <Dropdown options={['Odtah', 'Vyproštění', 'Převoz']}  placeholder='Vyberte typ' className={classes.dropdown} menuClassName={classes.dropdownControl} />
                    <ImgUpload />
                    <button className={classes.btn} type="submit">Odeslat</button>
                </HorizontalPanel>    
            </form>
    );
}

export default OfferForm;