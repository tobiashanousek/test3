import { Link } from "react-router-dom";
import InfoText from "../../components/info-text/InfoText";
import Input from "../../components/input/Input";
import classes from './Register.module.css';
import { useEffect, useState } from "react";


const Register: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [Phone, setPhone] = useState<string>('');
    const [passwordAgain, setPasswordAgain] = useState<string>('');
    const [samePassword, setSamePassword] = useState<boolean>(false);   
    const [passwordLength, setPasswordLength] = useState<boolean>(false); 
    const [passwordUpperCase, setPasswordUpperCase] = useState<boolean>(false);
    const [passwordNumber, setPasswordNumber] = useState<boolean>(false);


    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if(samePassword){
            
            const data = { email, password, userName, Phone };
            await fetch("/api/Auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        }
    }



    useEffect(() => {
        const CheckPassword = () => {
            if(password === passwordAgain && password.length >= 8){
                setSamePassword(true);
            } else {
                setSamePassword(false);
            }
    
            if(password.length >= 8){
                setPasswordLength(true);
            } else {
                setPasswordLength(false);
            }
    
            if(password.match(/[A-Z]/)){
                setPasswordUpperCase(true);
            } else {
                setPasswordUpperCase(false);
            }
    
            if(password.match(/[0-9]/)){
                setPasswordNumber(true);
            } else {    
                setPasswordNumber(false);
            }
    
        }
        CheckPassword();
    },[password, passwordAgain]);

    return (
        <div className={classes.wrapper}>
        <form className={classes.container} onSubmit={submitHandler}>
            
            <Input placeholder="Karel Novák" label="Jméno a příjmení" onChange={setUserName} />
            <Input placeholder="+420 123 456 789" label="Telefon" type="tel" onChange={setPhone} />
            <Input placeholder="testovaci@gmail.com" label="Email" type="email"  onChange={setEmail}/>
            <Input label="Heslo" type="password" onChange={setPassword}/>
            <Input label="Heslo znovu" type="password" onChange={setPasswordAgain} />
            <InfoText text="Minimálně 8 znaků" condition={passwordLength} />
            <InfoText text="Alespoň jedno velké písmeno" condition={passwordUpperCase} />
            <InfoText text="Alespoň jedno číslo" condition={passwordNumber} />
            <InfoText text="Hesla jsou stejná" condition={samePassword} />
            <button className={classes.btn} type="submit">Registrovat</button>
            <p>Už máte učet? <Link className={classes.loginLink} to="/login">Přihlaste se</Link> </p>
        </form>
        </div>
    );
}


export default Register;