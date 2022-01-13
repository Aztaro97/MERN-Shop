import React, { useState } from "react";
import { push as Menu } from "react-burger-menu";
import {
  RiArrowDownSFill,
  RiArrowDownSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BurgerMenu() {
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
        <li className="nav__item dropdown">
          <Link to="/#services" className="link" onClick={handleShowSubMEnu}>
            Services{" "}
            {showDropDown ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
          </Link>
          <ul className="subMenu">
            <li>
              <Link to="/design" className="sub_link" onClick={handleClose}>
                Design
              </Link>
            </li>
            <li>
              <Link
                to="/photography"
                className="sub_link"
                onClick={handleClose}
              >
                Photography
              </Link>
            </li>
            <li>
              <Link to="/printing" className="sub_link" onClick={handleClose}>
                Printing Press
              </Link>
            </li>
            <li>
              <Link to="/exhibition" className="sub_link" onClick={handleClose}>
                Exhibition Management
              </Link>
            </li>
            <li>
              <Link
                to="/programming"
                className="sub_link"
                onClick={handleClose}
              >
                Programming
              </Link>
            </li>
            <li>
              <Link to="/marketing" className="sub_link" onClick={handleClose}>
                Marketing
              </Link>
            </li>
            <li>
              <Link to="/production" className="sub_link" onClick={handleClose}>
                Production
              </Link>
            </li>
            <li>
              <Link to="/pos" className="sub_link" onClick={handleClose}>
                POS
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <Link to="/about" className="link" onClick={handleClose}>
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact-us" className="link" onClick={handleClose}>
            Contact
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/advertising/register"
            className="link border_link"
            onClick={handleClose}
          >
            Add Ads
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/register"
            className="link border_link"
            onClick={handleClose}
          >
            Become a seller
          </Link>
        </li>
      </ul>
    </MenuContainer>
  );
}

const MenuContainer = styled(Menu)`
  height: 100vh;
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
      padding: 5px 1rem;
      border: 1px solid var(--silver-color);
    }
    & .link {
      color: var(--silver-color) !important;
      text-decoration: none;
      text-transform: uppercase;
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

  /* & .dropdown {
    display: block;
    & .subMenu {
        display: block;
        visibility: visible;
        opacity: 1;
      }
  } */

  & .subMenu {
    position: relative !important;
    left: -10px;
    list-style: none;
    margin: 0;
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
