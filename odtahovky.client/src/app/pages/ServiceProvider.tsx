import Article from "../../components/article/Article";
import ImgUpload from "../../components/img-upload/ImgUpload";
import Input from "../../components/input/Input";
import InputArea from "../../components/input/InputArea";
import HorizontalPanel from "../../components/panel/HorizontalPanel";
import classes from "./ServiceProvider.module.css";

const ServiceProvider: React.FC = () => {
  return (
    <section className={classes.container}>
      <Article heading="Jak se stát poskytovatelem služeby?">
        <p className={classes.text}>
          <span className={classes.highlight}>Výhody pro odtahovky</span>
          Přístup k novým zákazníkům. Transparentní ceny. Snadná správa
          objednávek.
        </p>
        <p className={classes.text}>
          <span className={classes.highlight}>Podmínky pro připojení</span>
          Živnostenské oprávnění. Řidičský průkaz. Pojištění a technická
          způsobilost vozidla.
        </p>
      </Article>
      <HorizontalPanel>
        <p className={classes.highlight}>
          Registrovat se jako poskytovatel služby
        </p>
        <form>
          <HorizontalPanel>
            <Input label="Jméno a Příjmení" />
            <Input label="Adresa" />
            <Input label="Email" />
            <Input label="Telefon" />
            <InputArea label="Služby které poskytujete (oddělte ,mezera )" />
            <div className={classes.uploadContainer}>
              <ImgUpload />
              <p className={classes.text}>
                <span className={classes.highlight}>Potřebné dokumenty</span>
                Řidičský průkaz Pojištění
              </p>
            </div>
            <button className={classes.btn} type="submit">
                Odeslat</button>
          </HorizontalPanel>
        </form>
      </HorizontalPanel>
    </section>
  );
};

export default ServiceProvider;
