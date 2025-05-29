import { PropsWithChildren } from "react";
import classes from './HorizontalPanelBig.module.css';

const HorizontalPanelBig: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={classes.panel}>
            {children}
        </div>
    );
    }

export default HorizontalPanelBig;