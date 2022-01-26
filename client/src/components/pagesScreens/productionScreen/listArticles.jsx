import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Card, Col, Modal, Row } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  deleteArticleById,
  getAllArticles,
} from "../../../flux/actions/articleAction";
import LoaderComponent from "../../loader";
import MainContainer from "../../MainContainer";
import ErrorServerPage from "../ErrorServerPage";

const { Meta } = Card;
const { confirm } = Modal;

function ListArticles() {
  const { loading, articles, error } = useSelector(
    (state) => state.articlesList
  );

  const dispatch = useDispatch();

  const history = useHistory();

  const deleteArticle = async (id) => {
    const {data} = await axios.delete(`/api/articles/${id}`);
    if (data.msg) {
      dispatch(getAllArticles());
    }
  };

  const showDeleteConfirm = (articleID) => {
    confirm({
      title: "Are you sure delete this product?",
      icon: <ExclamationCircleOutlined />,
      // content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteArticle(articleID);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

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
            {articles &&
              articles.map((item, index) => (
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 12 }}
                  md={{ span: 8 }}
                  lg={{ span: 6 }}
                  key={item + index}
                >
                  <Card
                    hoverable
                    className="product_card"
                    cover={
                      <img
                        alt="example"
                        src={item.imgUrl[0].url}
                        height="200px"
                      />
                    }
                    actions={[
                      <EditOutlined
                        key="edit"
                        onClick={() =>
                          history.push(`/admin/article/${item._id}`)
                        }
                      />,
                      <DeleteOutlined
                        key="edit"
                        onClick={() => showDeleteConfirm(item._id)}
                      />,
                    ]}
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
    letter-spacing: 1px;
  }
`;

export default ListArticles;
