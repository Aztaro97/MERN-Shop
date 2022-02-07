import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { MdDelete, FaCheckCircle, FaTimesCircle } from "react-icons/all";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { listUsers, deleteUser } from "../../../flux/actions/userAction";
import MainContainer from "../../MainContainer";
import LoaderComponent from "../../loader";
import ErrorServerPage from "../ErrorServerPage";

const { confirm } = Modal;

function UserListScreen() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, error, users } = useSelector((state) => state.userList);

  const { userInfo } = useSelector((state) => state.userLogin);

  const { success: successDelete } = useSelector((state) => state.userDelete);

  const showConfirm = (id) => {
    confirm({
      title: "Are you sur to delete ?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes, Of course",
      className: "modal_container",
      onOk() {
        dispatch(deleteUser(id));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/auth");
    }
  }, [dispatch, history, userInfo, successDelete]);
  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : error === "Request failed with status code 500" ? (
        <ErrorServerPage />
      ) : (
        <UserContainer>
          <h3>{t("all_user_lists")}</h3>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th>type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id.slice(0,5)}...</td>
                  <td>{user.company != null ? user.company.name : "NULL"}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <FaCheckCircle style={{ color: "green" }} />
                    ) : (
                      <FaTimesCircle style={{ color: "red" }} />
                    )}
                  </td>
                  <td>{user.company.type}</td>
                  <td>
                    <button
                      type="button"
                      className="delete_btn"
                      onClick={() => showConfirm(user._id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </UserContainer>
      )}
    </MainContainer>
  );
}

const UserContainer = styled.div`
  padding: 2rem 10px;
  & h3 {
    text-align: center;
    text-transform: uppercase;
    color: var(--silver-color);
    margin-bottom: 10px;
    letter-spacing: 1px;
  }
  & a {
    color: var(--silver-color);
  }
`;


const Table = styled.table`
  width: 100%;
  & thead {
    & tr {
      background: var(--orange-color);
      & th {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 1px;
        color: #fff;
      }
    }
  }
  & tbody {
    margin-top: 1rem;
    & tr {
      & td {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        /* text-transform: uppercase; */
        & .delete_btn {
          outline: none;
          background: #eb4d4b;
          color: #fff;
          border: none;
          padding: 1px 12px;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default UserListScreen;
