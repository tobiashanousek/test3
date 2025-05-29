import Article from "../../components/article/Article";
import ArticleWithBg from "../../components/article/ArticleWithBg";
import MainArticle from "../../components/main/MainArticle";
import HorizontalPanel from "../../components/panel/HorizontalPanel";


const AboutUs: React.FC = () => {
  return (
    <MainArticle heading="O nás">
        <HorizontalPanel>
            <Article heading="Náš příběh"> 
            Věříme, že odtahové služby by měly být dostupné pro každého a kdykoliv. Naše platforma vznikla z potřeby rychle, efektivně a spolehlivě řešit situace, kdy potřebujete své vozidlo dostat z bodu A do bodu B.
            </Article>
            <ArticleWithBg heading="Jak fungujeme (krok za krokem):">
                <ol>
                    <li>Zadáte svůj požadavek.</li>
                    <li>Odtahová služba vaši nabídku přijme.</li>
                    <li>Dohodnete si čas a místo naložení.</li>
                    <li>Sledujete postup přímo v aplikaci.</li>
                </ol>
            </ArticleWithBg>
            <Article heading="Naše mise"> 
            Chceme poskytovat profesionální, spolehlivé a cenově dostupné služby pro všechny majitele vozidel.
            </Article>
        </HorizontalPanel>
        

    </MainArticle>
  );
}

export default AboutUs;