import { NavLink } from 'react-router-dom';
import '../Therms/TermsUser.scss';

const linkClass = ({ isActive }) => (isActive ? 'active-link' : 'navlink-terms-style');

export const HomeView = () => (
  <ul className="block-navink-terms">
    <li className="navlink-terms-li">
      <NavLink to="/terms-conditions-users" className={linkClass}>
        Terms and Conditions for Users
      </NavLink>
    </li>

    <li className="navlink-terms-li">
      <NavLink to="/terms-conditions-hoteliers" className={linkClass}>
        Terms and Conditions for Hoteliers
      </NavLink>
    </li>

    <li className="navlink-terms-li">
      <NavLink to="/terms-conditions-agents" className={linkClass}>
        Terms and Conditions for Agents
      </NavLink>
    </li>

    <li className="navlink-terms-li">
      <NavLink to="/privacy-policy-users" className={linkClass}>
        Privacy Policy Users
      </NavLink>
    </li>

    <li className="navlink-terms-li">
      <NavLink to="/privacy-policy-hoteliers" className={linkClass}>
        Privacy Policy Hoteliers
      </NavLink>
    </li>

    <li className="navlink-terms-li">
      <NavLink to="/privacy-policy-agents" className={linkClass}>
        Privacy Policy Agents
      </NavLink>
    </li>

    <li className="navlink-terms-li">
      <NavLink to="/our-mission" className={linkClass}>
        Our mission
      </NavLink>
    </li>
  </ul>
);
