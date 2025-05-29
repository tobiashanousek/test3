//React
import ButtonLink from "../buttons/ButtonLink";
import ButtonLinkOuline from "../buttons/ButtonLinkOutline";
import HorizontalPanel from "../panel/HorizontalPanel";

//CSS
import classes from "./Header.module.css"

//Img
import wheeleChange from "../../assets/wheeleChange.png"

const Header: React.FC = () => {
  return (
    <header className={classes.header} >
      <div className={classes.content} >
      <h1 className={classes.heading}>Rychlý <span className={classes.highlight}>odtah</span>, <span className={classes.highlight}>převoz</span> a <span className={classes.highlight}>vyproštění vozidel</span> – jednoduše a online!</h1>
      <article className={classes.infoParagraph}>
        <p >Potřebujete <span className={classes.highlight}>přetáhnout</span> své vozidlo? Naše platforma <span className={classes.highlight}>spojuje</span> lidi, kteří <span className={classes.highlight}>potřebují pomoc</span>, s <span className={classes.highlight}>profesionály</span>, kteří ji mohou zajistit. Ať už jde o <span>poruchu, převoz</span> na dlouhé vzdálenosti, nebo <span className={classes.highlight}>vyproštění</span>, jsme tu pro vás!</p>
      </article>
      <HorizontalPanel>
        <ButtonLink text="Zadej svůj požadavek" link="/offer" />
        <ButtonLinkOuline text="Přidej se jako odtahová služba" link="/join" />
      </HorizontalPanel>
      </div>
      
      <aside className={classes.desktop_img}>
        <img className="img-responsive" src={wheeleChange} alt="Towing truck" />
      </aside>


    </header>
  );
}

export default Header;