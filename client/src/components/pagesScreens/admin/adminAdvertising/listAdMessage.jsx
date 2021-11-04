import React, { useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import {
  fetchAllClientMessage,
  getMessageById,
} from "../../../../flux/actions/advertisingAction/advertisingAction";
import LoaderComponent from "../../../loader";
import BodyScreen from "./bodyScreen";

const ListAdMessage = () => {
  const { userInfo } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/auth");
    }

    dispatch(fetchAllClientMessage());
  }, [dispatch, userInfo, history]);

  return (
    <Container>
      <h1 className="title">Messageries</h1>
      <Grid>
        <AsideComponent></AsideComponent>
        <BodyScreen />
      </Grid>
    </Container>
  );
};

const AsideComponent = () => {
  const [actived, setActived] = useState(true);
  const { loading, allMessages } = useSelector((state) => state.advertising);
  const dispatch = useDispatch();
  return (
    <AsideStyling>
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          {allMessages.length > 0 &&
            allMessages.map((item) => (
              <div key={item._id}>
                <CardItem
                  onClick={() => dispatch(getMessageById(item._id))}
                  view={item.view}
                >
                  {item.firstName} {item.lastName}
                  {item.view === false && (
                    <span className="view_text">new</span>
                  )}
                </CardItem>
              </div>
            ))}
        </>
      )}
    </AsideStyling>
  );
};

const Container = styled.div`
  max-width: 1400px;
  margin: 7rem auto 4rem;
  padding-bottom: 2.5rem;

  & .title {
    font-size: 1.5em;
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  grid-column-gap: 30px;
  height: 70vh;
`;
const AsideStyling = styled.div`
  background-color: #fff;
  height: 100%;
  margin-right: 4px;
  overflow-y: scroll;
`;

const CardItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 10px;
  margin-bottom: 7px;
  text-transform: capitalize !important;
  text-decoration: none;
  box-shadow: var(--box-shadow-value);
  background: ${({ view }) =>
    view === true ? "rgba(242,245,245,0.8)" : "#fff"};
  color: ${({ view }) => (view === true ? "#333" : "inehrit")};
  &:hover {
    background: var(--orange-color);
    color: #000 !important;
    text-decoration: none;
  }
  & .view_text {
    color: var(--orange-color) !important;
    text-transform: lowercase;
  }
`;

export default ListAdMessage;
