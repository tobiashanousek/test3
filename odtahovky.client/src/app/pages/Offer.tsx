import MainArticle from "../../components/main/MainArticle";
import OfferForm from "../../components/offer-form/OfferForm";
import HorizontalPanelBig from "../../components/panel/HorizontalPanelBig";
import classes from "./Offer.module.css";


const Offer: React.FC = () => {
    return (
        <HorizontalPanelBig>
            <div className={classes.container}>
            <MainArticle heading="Požadavek">
            <p>Pro odeslání požadavku budete muset povolit sdílení polohy.</p>
            </MainArticle>
            <OfferForm/>
            </div>
        </HorizontalPanelBig>

    );
    }
export default Offer;
