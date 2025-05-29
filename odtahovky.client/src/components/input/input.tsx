import { useId } from "react";
import classes from "./input.module.css";
type InputProps = {
    label: string;
    type?: string;
    placeholder?: string;
    onChange: (e: string) => void;
}

const Input: React.FC<InputProps> = ({label, type,onChange, placeholder}) => {

    const Id = useId();
    return (
        <>
            <label htmlFor={Id} className={classes.label}>{label}</label>
            <input placeholder={placeholder} onChange={(e) => onChange(e.currentTarget.value.trim())} id={Id} type={type} className={classes.input}/>
        </>
    );
}

export default Input;