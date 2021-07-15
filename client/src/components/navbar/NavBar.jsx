import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Popover } from "antd";
import MAinContainer from "../MainContainer"

function NavBar() {
  const ProfileContent = (
    <Content>
      <LinkP to="/profile">my profile</LinkP>
      <LinkP to="/myproducts">my products</LinkP>
      <LinkP to="/add-product">add more products</LinkP>

      <LinkP className="btn_logOut" to="/logout">
        Log Out
      </LinkP>
    </Content>
  );
  return (
    <MAinContainer>
        <NavContainer>
      <Lang to="/arab">Arabic</Lang>
      <Nav>
        <NavItem>
          <Popover
            placement="bottomRight"
            content={ProfileContent}
            trigger="hover"
          >
            <NavLink>
              <FaUser className="icon" />
            </NavLink>
          </Popover>
        </NavItem>
        <NavItem>
          <NavLink>
            <FaShoppingCart className="icon" />
            <span className="count">10</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="menuButton">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
        </NavItem>
      </Nav>
    </NavContainer>
    <Hr />
    </MAinContainer>
  );
}
const Hr = styled.div`
    background: #cecece ;
    height:.1px;
`
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  
`;
const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 0;
  position: relative;
  right: 1.8rem;
  top: .6rem;
`;
const NavItem = styled.li`
  padding: 0 1rem;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--silver-color);

  & .icon {
    font-size: 1.4rem;
  }

  &.menuButton {
    position: absolute;
    top: -1rem;
    width: 44px;
    height: 44px;
    padding: 5px;
    text-align: center;
    font-size: 0;
    border: none;
    background: none;
    z-index: 12;
    perspective: 500px;
    border: 1px solid #cccccc;
    transition: 0.2s;
    z-index: 200;
    background: #fff;
  }
  &.menuButton span {
    display: inline-block;
    margin: 3px;
    width: 4px;
    height: 4px;
    background: #c68787;
    transition: 0.8s;
  }
  &.menuButton:hover {
    background: #f7f7f7;
  }

  & .count {
    position: relative;
    bottom: 1rem;
    right: 0.4rem;
    background: var(--orange-color);
    color: #fff;
    padding: 4px;
    border-radius: 50%;
  }

  &:hover {
    color: var(--orange-color);
  }
`;
const Lang = styled(Link)`
  text-decoration: none;
  border: 1px solid var(--orange-color);
  color: var(--silver-color);
  padding: 0.3rem 2rem;
  border-radius: 30px;
  transition: 0.3s all ease-in-out;
  letter-spacing: 3px;

  &:hover {
    color: #fff;
    background: var(--orange-color);
  }
`;

const Content = styled.div`
  background: #fff;
  padding: 1rem 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LinkP = styled(Link)`
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid var(--orange-color);
  color: var(--silver-color);
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  margin: 0.7rem 0;
  text-align: center;
  transition: 0.2s all ease-in;

  &:hover {
    color: #fff;
    background: var(--orange-color);
  }

  &.btn_logOut {
    margin-top: 1rem;
    background: var(--orange-color);
    color: #fff;
    font-weight: 700;
  }
  &.btn_logOut:hover {
    opacity: 0.9;
  }
`;
export default NavBar;
