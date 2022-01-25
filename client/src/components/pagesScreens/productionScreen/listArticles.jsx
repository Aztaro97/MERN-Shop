import { EditOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllArticles } from "../../../flux/actions/articleAction";
import LoaderComponent from "../../loader";
import MainContainer from "../../MainContainer";
import ErrorServerPage from "../ErrorServerPage";

const { Meta } = Card;

function ListArticles() {
  const { loading, articles, error } = useSelector(
    (state) => state.articlesList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);

  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <ErrorServerPage />
      ) : (
        <Container>
          <h2 className="title">All Articles</h2>
          <Row gutter={[20, 40]}>
            {articles  &&
              articles.map((item, index) => (
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 12 }}
                  md={{ span: 8 }}
                  lg={{ span: 6 }}
                  key={item + index}
                >
                  <Card
                    // onClick={() => history.push(`/production/${item.name}`)}
                    hoverable
                    className="product_card"
                    cover={
                      <img
                        alt="example"
                        src={item.imgUrl[0].url}
                        height="200px"
                      />
                    }
                    actions={[<EditOutlined key="edit" />]}
                  >
                    <Meta title={item.name} description={`${item.price} AED`} />
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      )}
    </MainContainer>
  );
}

const Container = styled.div`
  padding: 4rem 0;
  & .title {
    text-align: center;
    color: var(--silver-color);
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export default ListArticles;
