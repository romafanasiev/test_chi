import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className="Header">
      <NavLink to="/" className="wrapper Header__link">
        <h1>Current Loans</h1>
      </NavLink>
    </header>
  );
};
