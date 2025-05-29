import React, { PropsWithChildren } from "react";
import classes from "./Card.module.css";
type CardProps = {
    title: string;
}

const Card: React.FC<PropsWithChildren<CardProps>> = ({title, children}) => {
    return (
        <div className={classes.card}>
            <p className={classes.title}>{title}</p>
            <span className={classes.title}>{children}</span>
        </div>
    );
}

export default Card;