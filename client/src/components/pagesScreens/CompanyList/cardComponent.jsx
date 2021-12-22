import React from "react";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import styled from "styled-components";

const empty_pic = "/img/advertising/empty.jpg";

function CardComponent({ user }) {
  return (
    <Card>
      <img
        className="card_img"
        src={
          user.company.urlImg.length !== 0
            ? user.company.urlImg[0].url
            : empty_pic
        }
        alt=""
      />
      <div className="card_body">
        <h3>{user.company.name}</h3>
        <TextTruncate
          line={2}
          element="p"
          truncateText="…"
          text={user.company.about}
        />
        {/* <hr /> */}
        <Link className="link" to={`profile/${user._id}`}>
          see more
        </Link>
      </div>
    </Card>
  );
}

const Card = styled.div`
  box-shadow: var(--box-shadow-value);
  background: var(--black-color);
  padding: 10px;
  & .card_img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    padding: 10px;
    @media only screen and (max-width: 768px) {
      height: 150px;
    }
  }

  & .card_body {
    padding: 1rem;
    text-align: center;
    & h3 {
      margin-bottom: 0;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--silver-color);
      margin-bottom: 10px;
    }
    & p {
      color: var(--silver-color);
      margin-bottom: 10px;
    }
    & hr {
      border: none;
      background: #ececec;
      height: 1px;
      outline: none;
    }
    & .link {
      text-decoration: none;
      width: 100%;
      padding: 0.6rem 0;
      text-align: center;
      text-transform: uppercase;
      border-radius: 10px;
      background: var(--orange-color);
      display: block;
      color: #fff;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

export default CardComponent;
