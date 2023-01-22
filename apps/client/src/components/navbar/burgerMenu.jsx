import React, { useState } from "react";
import { push as Menu } from "react-burger-menu";
import {
  RiArrowDownSFill,
  RiArrowDownSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./navbar.css";

function BurgerMenu({ userInfo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropDown, setshowDropDown] = useState(false);

  const handleShowSubMEnu = () => {
    setshowDropDown(!showDropDown);
  };
  const handleClose = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <MenuContainer
      isOpen={menuOpen}
      showDropDown={showDropDown}
      onStateChange={(e) => setMenuOpen(e.isOpen)}
      burgerButtonClassName="burger_button"
    >
      <ul className="navigation">
        <li className="nav__item">
          <Link to="/" className="link" onClick={handleClose}>
            Home
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/products" className="link">
            Shop
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/companies" className="link">
            companies
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/contact-us" className="link" onClick={handleClose}>
            Contact
          </Link>
        </li>

        {!userInfo?.company && (
          <li className="nav__item">
            <Link
              to="/register"
              className="link border_link"
              onClick={handleClose}
            >
              Become a seller
            </Link>
          </li>
        )}
      </ul>
    </MenuContainer>
  );
}

const MenuContainer = styled(Menu)`
  height: 100vh;
  opacity: 1;
  & .navigation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    top: 40px;
    /* text-align: center; */
  }

  & .nav__item {
    & .link.border_link {
      padding: 8px 1rem;
      border: 1px solid var(--silver-color);
    }
    & .link {
      color: var(--silver-color) !important;
      text-decoration: none;
      /* text-transform: uppercase; */
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 1px;
      &:hover {
        background: transparent !important;
        color: var(--orange-color) !important;
        & .link {
          color: var(--white-color);
        }
      }
    }
  }

  & .subMenu {
    position: relative !important;
    left: -10px;
    list-style: none;
    margin: 0;
    background: var(--silver-color);
    visibility: ${({ showDropDown }) => (showDropDown ? "visible" : "hidden")};
    opacity: ${({ showDropDown }) => (showDropDown ? 1 : 0)};
    display: ${({ showDropDown }) => (showDropDown ? "block" : "none")};
    transition: all 0.3s ease-in-out;
    & li {
      padding: 0;
      line-height: 40px;
      & .sub_link {
        color: var(--white--color);
        text-decoration: none;
        padding: 10px 10px;
        &:hover {
          background: var(--orange-color);
          color: white;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    display: none !important;
    opacity: 0;
  }
`;

export default BurgerMenu;
