import React from "react";
import { Card } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

function CardItem({ id, name, price, img }) {
  const history = useHistory();
  return (
    <CardStyling
      onClick={() => history.push(`/production/item/${id}`)}
      hoverable
      style={{ width: 220 }}
      cover={<img className="card_img" alt="example" src={img} />}
    >
      <Meta title={name} description={`${price} AED`} />
    </CardStyling>
  );
}

const CardStyling = styled(Card)`
  &:hover {
    box-shadow: 0px 0px 6px 6px rgba(158, 159, 161, 0.31);
  }
  & .card_img {
    height: 220px;
    object-fit: cover;
  }

  & .ant-card-meta-description {
    color: var(--orange-color);
    font-weight: 700;
  }
`;

export default CardItem;
