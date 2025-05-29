import Card from "../card/Card";
import classes from "./Main.module.css";
import { FiShare2 } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";



const Main: React.FC = () => {
    return(
        <main>
        <div className={classes.container}>
                <Card title="Rychlé propojení s odtahovkami."><FiShare2 size={48} /></Card>
                <Card title="Transparentní ceny za kilometry."><FiDollarSign size={48}/></Card>
                <Card title="Bezpečný převoz od prověřených řidičů."><FiCheckCircle size={48}/></Card>
        </div>
        </main>
    )

}

export default Main;