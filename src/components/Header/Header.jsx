import Logo from '../../img/Logo.svg';
import './header.scss';
import { Button } from '../Button/Button.jsx'
import {scrollToSection} from'../../util/helper.js'

export const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <img src={Logo} alt="logo" />
        <div className="header__buttons">
          <Button onClick={() => scrollToSection('users')}>Users</Button>
          <Button onClick={() => scrollToSection('singUp')}>Sign up</Button>
        </div>
      </div>
    </div>
  );
};
