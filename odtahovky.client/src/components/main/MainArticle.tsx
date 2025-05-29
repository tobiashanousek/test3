import { PropsWithChildren } from "react";

import classes from "./MainArticle.module.css";

type MainArticleProps = {
    heading: string;
};

const MainArticle: React.FC<PropsWithChildren<MainArticleProps>> = ({heading ,children}) => {
    return(
        <main>
        <div className={classes.container}>
            <h2 className={classes.heading}>{heading}</h2>
            {children}
        </div>
        </main>
    )
}

export default MainArticle;