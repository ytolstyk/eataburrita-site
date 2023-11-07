import { NavItem, NavLink, NavWrapper } from "./styles";

export function Navbar() {
  return (
    <NavWrapper>
      <NavLink to="/">
        <NavItem>Home</NavItem>
      </NavLink>
      <NavLink to="/privacy">
        <NavItem>Privacy Policy</NavItem>
      </NavLink>
      <NavLink to="/eula">
        <NavItem>End User License Agreement</NavItem>
      </NavLink>
    </NavWrapper>
  );
}
