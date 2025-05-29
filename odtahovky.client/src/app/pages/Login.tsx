import Input from "../../components/input/Input";
import classes from './Login.module.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
            
            const data = { email, password };
           const response = await fetch("/api/Auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log("Logged in");
        }
    }

    return (
        <form onSubmit={submitHandler}>
        <div className={classes.container}>

                <Input onChange={setEmail} label="Email" type="email" />
                <Input onChange={setPassword} label="Heslo" type="password" />

            <button  className={classes.btn} type="submit">Přihlásit</button>
            <p>Nemáte učet? <Link className={classes.registerLink} to="/register">Vytvořte si ho</Link> </p>

        </div>
        </form>
    );
}

export default Login;