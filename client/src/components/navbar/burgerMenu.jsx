import React from "react";
import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BurgerMenu() {
  return (
    <MenuContainer>
      <ul className="navigation">
        <li className="nav_item">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="nav_item dropdown">
          <Link to="/services" className="link">
            Services
          </Link>
          <ul className="sub_menu">
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
        <li className="nav_item">
          <Link to="/advertising/register" className="link">
            Add Ads
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/register" className="link">
            Create Shop
          </Link>
        </li>
      </ul>
    </MenuContainer>
  );
}

const MenuContainer = styled(Menu)`
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
    text-align: center;
    & .nav_item {
      /* text-align: center; */
      display: block;
      & .link {
        color: white !important;
        text-decoration: none;
        &:hover {
          background: var(--orange-color) !important;
          color: var(--white-color);
          & .link {
            color: var(--white-color);
          }
        }
        &.dropdown {
          display: block;
          &:hover {
            & .sub_menu {
              display: block;
              visibility: visible;
              opacity: 1;
            }
          }
        }

        & .sub_menu {
          /* position: absolute; */
          top: 63px;
          list-style: none;
          padding: 0;
          margin: 0;
          background: #fff;
          visibility: visible  !important;
          opacity: 1  !important;
          display: block !important;
          & li {
            padding: 0;
            & .sub_link {
              color: #000;
              text-decoration: none;
              padding: 10px 2rem;
              display: block;
              &:hover {
                background: var(--orange-color);
                color: white;
              }
            }
          }
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
