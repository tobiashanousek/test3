import { PropsWithChildren } from "react";
import classes from './HorizontalPanel.module.css';

const HorizontalPanel: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={classes.panel}>
            {children}
        </div>
    );
    }

export default HorizontalPanel;