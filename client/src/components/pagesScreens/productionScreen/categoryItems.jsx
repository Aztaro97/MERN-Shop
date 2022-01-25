import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getCategoriesArticle } from "../../../flux/actions/articleAction";
import LoaderComponent from "../../loader";
import MainContainer from "../../MainContainer";
import CardItem from "./cardItem";

function CategoryItems() {
  const params = useParams();
  const categoryName = params.category;

  const { loading, error, articles } = useSelector(
    (state) => state.articlesList
  );

  const dataProducts = [
    {
      id: 65456488,
      name: "Product 1",
      price: 4500,
      img:
        "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    },
    {
      id: 65456488,
      name: "Product 1",
      price: 4500,
      img:
        "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    },
    {
      id: 65456488,
      name: "Product 1",
      price: 4500,
      img:
        "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    },
    {
      id: 65456488,
      name: "Product 1",
      price: 4500,
      img:
        "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    },
    {
      id: 65456488,
      name: "Product 1",
      price: 4500,
      img:
        "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    },
    {
      id: 65456488,
      name: "Product 1",
      price: 4500,
      img:
        "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    },
    {
      id: 65456488,
      name: "Product 1",
      price: 4500,
      img:
        "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    },
    {
      id: 65456488,
      name: "Product 1",
      price: 4500,
      img:
        "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    },
    {
      id: 65456488,
      name: "Product 1",
      price: 4500,
      img:
        "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    },
    {
      id: 65456488,
      name: "Product 1",
      price: 4500,
      img:
        "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesArticle(categoryName));
  }, [dispatch, categoryName]);

  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Container>
          <h4 className="title">
            Category: <span>{categoryName}</span>{" "}
          </h4>
          <Row gutter={[40, 40]} >
            {articles?.map((item, index) => (
              <Col
                key={index}
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 6 }}
              >
                <CardItem
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  img={item.imgUrl[0].url}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </MainContainer>
  );
}

const Container = styled.div`
  padding: 4rem 1rem;
  & .title {
    color: var(--silver-color);
    text-transform: capitalize;
    margin-bottom: 2rem;
    & span {
      color: var(--orange-color);
      text-transform: lowercase;
    }
  }
`;

export default CategoryItems;
