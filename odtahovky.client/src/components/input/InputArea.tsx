import classes from "./input.module.css";
import { useId } from "react";
type InputProps = {
    label: string;
}

const InputArea: React.FC<InputProps> = ({label}) => {
    const Id = useId();

    
    return (
        <>
            <label htmlFor={Id} className={classes.label}>{label}</label>
            <textarea id={Id} className={classes.input} />

        </>
    );
}


export default InputArea;