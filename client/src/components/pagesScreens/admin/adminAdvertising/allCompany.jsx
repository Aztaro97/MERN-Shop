import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdService } from "../../../../flux/actions/advertisingAction/advertisingAction";
import LoaderComponent from "../../../loader";

const AllCompanyService = () => {
  const dispatch = useDispatch();

  const { loading, listAdService, error } = useSelector(
    (state) => state.advertising
  );

  useEffect(() => {
    dispatch(getAllAdService());
  }, []);

  return (
    <AllCompanyContainer>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <h3>Error: {error} </h3>
      ) : (
        <>
          <h3 className="title">all ad services</h3>
          <Table>
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>Telephone</th>
                <th>address</th>
                <th>Type ad</th>
                <th>company</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <td>moussa</td>
              <td>moussa@gmail.com</td>
              <td>90909090</td>
              <td>
                <ul>
                  <li>city: Niamey</li>
                  <li>region: Niamey</li>
                  <li>country: Niger</li>
                </ul>
              </td>
              <td>free</td>
              <td>
                <ul>
                  <li>name: au79code</li>
                  <li>Bussiness: restaurant, real estate, car</li>
                  <li>about: about about about</li>
                </ul>
              </td>
            </tbody>
          </Table>
        </>
      )}
    </AllCompanyContainer>
  );
};

const AllCompanyContainer = styled.div`
  margin: 7rem auto 0;
  max-width: 2000px;
  padding: 0 1rem;
  & .title {
    text-align: center;
    text-transform: capitalize;
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
        font-weight: 700;
        color: #fff;
        font-size: 0.8rem;
      }
    }
  }
  & tbody {
    margin-top: 1rem;
    & tr {
      & td {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        text-transform: uppercase;
        font-size: 0.8rem;
        & .delete_btn {
          outline: none;
          background: #eb4d4b;
          color: #fff;
          border: none;
          padding: 1px 12px;
          font-size: 1.2rem;
        }
        & .images_lists {
          display: flex;
          justify-content: center;
          align-items: center;
          & .img {
            height: 70px;
            width: 70px;
            margin: 0 5px;
          }
        }
        & .action_btn {
          display: flex;
          align-items: center;
          color: #111;
          position: relative;
          top: 11px;
          &:hover {
            text-decoration: none;
            opacity: 0.9;
          }
        }
      }
      & .status {
        & p {
          display: flex;
          text-transform: capitalize;
          background: transparent;
          margin-bottom: 0;
          & .allow_btn_accept {
            color: green;
            font-size: 1rem;
            margin-left: 2px;
          }
          & .allow_btn_refuse {
            color: red;
            font-size: 1rem;
            margin-left: 2px;
          }
        }
      }
    }
  }
`;

export default AllCompanyService;
