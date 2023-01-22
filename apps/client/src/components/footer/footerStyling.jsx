import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin: 0 auto;
  background: radial-gradient(
      circle,
      rgba(41, 41, 41, 0.863) 0%,
      rgba(0, 0, 0, 0.9) 0%
    ),
    url("/img/footer/footer.jpg");
  background-size: cover;
  background-position: center;
  padding: 2rem;
  color: #fff;

  & .footer-row {
    /* padding: 20px 0; */
    /* margin:auto; */
    display: flex;
    justify-content: space-around;
    & .collumn {
      /* padding: 10px; */
    }

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }

  & .footer-group {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 4px;
    & .footer-item {
      & .link {
        color: #c8d6e5;
        text-decoration: none;
        /* text-transform: capitalize; */
        margin-bottom: 0;
        &:hover {
          color: var(--orange-color);
          transform: translateY(-3px);
          transition: color 0.2s ease-in;
        }
      }
    }
  }

  & .footer-heading {
    font-size: 1.5rem;
    text-transform: capitalize;
    color: #fff;
    font-weight: 700;
    letter-spacing: 1px;
    & .link {
      color: #efefef;
      text-decoration: none;
    }
  }

  & .follow-us {
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    & ul {
      display: flex;
      list-style: none;
      & li {
        margin: 0 10px;
        & .link {
          color: #fff;
          font-size: 1.3rem;
          padding: 0px;
          transition: all 0.5s ease-in-out;
          &:hover {
            & .icon {
              transform: scale(1.3) !important;
              transition: all 0.3s ease-in-out;
            }
          }
        }
      }
    }
  }

  & .text_coypright {
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
