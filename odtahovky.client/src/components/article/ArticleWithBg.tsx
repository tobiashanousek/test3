import classes from './ArticleWithBg.module.css';
import { PropsWithChildren } from 'react';

type ArticleProps = {
    heading: string; 
}

export const ArticleWithBg: React.FC<PropsWithChildren<ArticleProps>> = ({heading, children}) => {
    return (
        <article className={classes.article}>
            <h3 className={classes.article__heading} >{heading}</h3>
            <p className={classes.article__content}>{children}</p>
        </article>
    );
}

export default ArticleWithBg;