import React, { useState } from "react";
import { push as Menu } from "react-burger-menu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClose = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <MenuContainer isOpen={menuOpen}>
      <ul className="navigation">
        <li className="nav__item">
          <Link to="/" className="link" onClick={handleClose}>
            Home
          </Link>
        </li>
        <li className="nav__item dropdown">
          <Link to="/services" className="link">
            Services
            <MdOutlineKeyboardArrowRight />
          </Link>
          <ul className="subMenu">
            <li>
              <Link to="/design" className="sub_link">
                Design
              </Link>
            </li>
            <li>
              <Link to="/photography" className="sub_link">
                Photography
              </Link>
            </li>
            <li>
              <Link to="/printing" className="sub_link">
                Printing Press
              </Link>
            </li>
            <li>
              <Link to="/exhibition" className="sub_link">
                Exhibition Management
              </Link>
            </li>
            <li>
              <Link to="/programming" className="sub_link">
                Programming
              </Link>
            </li>
            <li>
              <Link to="/marketing" className="sub_link">
                Marketing
              </Link>
            </li>
            <li>
              <Link to="/production" className="sub_link">
                Production
              </Link>
            </li>
            <li>
              <Link to="/pos" className="sub_link">
                POS
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <Link
            to="/advertising/register"
            className="link"
            onClick={handleClose}
          >
            Add Ads
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/register" className="link" onClick={handleClose}>
            Create Shop
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
    top: 20px;
    text-align: center;
  }

  & .nav__item {
    & .link {
      color: var(--white-color) !important;
      text-decoration: none;
      text-transform: uppercase;
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
    /* position: absolute !important; */
    /* right: 45px; */
    list-style: none;
    padding: 0;
    margin: 0;
    visibility: visible !important;
    opacity: 1 !important;
    display: block !important;
    & li {
      padding: 0;
      & .sub_link {
        color: var(--white--color);
        text-decoration: none;
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