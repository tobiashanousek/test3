import React from "react";
import { FiCheck } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import classes from './InfoText.module.css';
type InfoTextProps = {
    text: string;
    condition: boolean;
}

const InfoText: React.FC<InfoTextProps> = ({ text, condition }) => {
    return (
        <p className={`${condition ? classes.success: classes.error}`}>{text} {condition ? <FiCheck/> : <FiX/>}</p>
    );
}

export default InfoText;