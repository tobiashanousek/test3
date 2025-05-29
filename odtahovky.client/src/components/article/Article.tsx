import { PropsWithChildren } from "react";
import classes from './Article.module.css';
type ArticleProps = {
    heading: string; 
}

const Article: React.FC<PropsWithChildren<ArticleProps>> = ({heading, children}) => {
    return (
        <article>
            <h3 className={classes.article__heading} >{heading}</h3>
            <p className={classes.article__content}>{children}</p>
        </article>
    );
}

export default Article;