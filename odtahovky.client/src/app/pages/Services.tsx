import Article from "../../components/article/Article";
import MainArticle from "../../components/main/MainArticle";
import HorizontalPanel from "../../components/panel/HorizontalPanel";



const Services: React.FC = () => {
    return (
        <MainArticle heading="Služby">
            <HorizontalPanel>
                <Article heading="Odtah vozidla">
                    Rychlý a spolehlivý odtah kdekoliv v České republice.
                </Article>
                <Article heading="Převoz vozidla">
                    Převezeme vaše vozidlo bezpečně na jakoukoliv vzdálenost.
                </Article>
                <Article heading="Vyproštění">
                    Pomoc při vyproštění vozidel z nepřístupného terénu.
                </Article>
                <Article heading="Cenová kalkulace">
                    Cena je kalkulována podle ujetých kilometrů a náročnosti zásahu.
                </Article>
            </HorizontalPanel>
        </MainArticle>
        
    );
}

export default Services;