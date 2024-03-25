import Logo from '../../img/Logo.svg';
import './header.css';
import {Button} from '../Button/Button.jsx'

export const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <img src={Logo} alt="logo" />
        <div className="header__buttons">
          <Button>Users</Button>
          <Button>Sign up</Button>
        </div>
      </div>
     </div>
  );
};
