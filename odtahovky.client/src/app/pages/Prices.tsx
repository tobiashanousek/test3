import Article from "../../components/article/Article";
import MainArticle from "../../components/main/MainArticle";
import HorizontalPanel from "../../components/panel/HorizontalPanel";


const Prices: React.FC = () => {
    return (
        <MainArticle heading="Ceník">
            <HorizontalPanel>
                <Article heading="Odtah vozidla">
                    Cenu vypočítáme na základě ujetých kilometrů. Každý kilometr stojí XY Kč.
                </Article>
                <Article heading="Převoz vozidla">
                    Cena závisí na vzdálenosti a typu vozidla. Kalkulaci si můžete spočítat přímo v aplikaci.
                </Article>
                <Article heading="Vyproštění">
                    Cena závisí na náročnosti zásahu. Kontaktujte nás pro individuální nabídku.
                </Article>
            </HorizontalPanel>
        </MainArticle>
    );
}

export default Prices;