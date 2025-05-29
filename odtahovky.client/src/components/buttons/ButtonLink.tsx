//React
import { Link } from 'react-router-dom';

//CSS
import classes from './ButtonLink.module.css';

type ButtonLinkProps = {
  text: string;
  link: string;
}


const ButtonLink: React.FC<ButtonLinkProps> = ({link, text}) => {
  return (
    <Link className={classes.link} to={link}>{text}</Link>
  );
}

export default ButtonLink;