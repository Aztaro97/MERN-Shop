import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import {
  getAllAdService,
  filterByTypeBusiness,
  updateAllowService,
} from "../../../../flux/actions/advertisingAction/advertisingAction";
import LoaderComponent from "../../../loader";
import { useHistory } from "react-router";
import { Select } from "antd";
import { BusinessList } from "../../../../utils/advertisingData";
const { Option } = Select;

const AllCompanyService = () => {
  const [allowed, setAllowed] = useState(false);
  const dispatch = useDispatch();

  const { loading, listAdService, error } = useSelector(
    (state) => state.advertising
  );
  const { userInfo } = useSelector((state) => state.userLogin);

  const handleSelectType = (val) => {
    console.log(val);
    dispatch(filterByTypeBusiness(val));
  };

  const history = useHistory();
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllAdService());
    } else {
      history.push("/auth");
    }
  }, [dispatch, userInfo, history]);

  const handleToggleChange = (id, checked) => {
    // console.log(checked)
    dispatch(updateAllowService(id, checked));
    dispatch(getAllAdService());
  };

  return (
    <AllCompanyContainer>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <h3>Error: {error} </h3>
      ) : (
        <>
          <h3 className="title">list all ad services</h3>
          <SelectStyling
            defaultValue="filter by type of Business"
            style={{ width: 400 }}
            onChange={handleSelectType}
          >
            {BusinessList.map((item, index) => (
              <Option key={index} value={item.value}>
                {item.title}
              </Option>
            ))}
          </SelectStyling>
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>Telephone</th>
                <th>address</th>

                <th>company</th>
                <th>Type ad plan</th>
                <th>Allowed</th>
              </tr>
            </thead>
            <tbody>
              {listAdService.map((ad) => (
                <tr key={ad._id}>
                  <td>{ad.user}</td>
                  <td>{ad.fullName}</td>
                  <td>
                    {" "}
                    <a href={`mailto:${ad.email}`}> {ad.email} </a>{" "}
                  </td>
                  <td>
                    {" "}
                    <a href={`tel:${ad.telephone}`}> {ad.telephone}</a>{" "}
                  </td>
                  <td>
                    <ul>
                      <li>
                        <span>city:</span> {ad.city}
                      </li>
                      <li>
                        <span>region:</span> {ad.region}
                      </li>
                      <li>
                        <span>country:</span> {ad.country}
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <span>name:</span> {ad.companyName}
                      </li>
                      <li>
                        <span>Bussiness:</span> {ad.typeBusiness.join(", ")}
                      </li>
                      <li className="about">
                        <span>about:</span> {ad.about}
                      </li>
                    </ul>
                  </td>
                  <td>{ad.typePlan}</td>
                  <td>
                    <Switch
                      onChange={(check) => handleToggleChange(ad._id, check)}
                      checked={ad.allow}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </AllCompanyContainer>
  );
};

const AllCompanyContainer = styled.div`
  margin: 7rem auto 7rem;
  max-width: 2000px;
  padding: 0 1rem;
  & .title {
    text-align: center;
    text-transform: capitalize;
  }
`;

const Table = styled.table`
  width: 100%;
  & ul {
    list-style: none;
  }
  & a {
    color: #333;
    text-decoration: none;
    text-transform: lowercase;
  }

  & thead {
    & tr {
      background: var(--orange-color);
      & th {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        text-transform: uppercase;
        /* font-weight: 700; */
        color: #fff;
        font-size: 0.8rem;
      }
    }
  }
  & tbody {
    margin-top: 1rem;
    & tr {
      border-bottom: 1px solid #333;
      & td {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        font-size: 0.8rem;
        text-transform: capitalize;

        & span {
          /* color: var(--orange-color); */
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: underline;
        }
        & .about {
          text-transform: initial;
        }
      }
    }
  }
`;

const SelectStyling = styled(Select)`
  margin-bottom: 1rem;
  text-transform: uppercase;
  &:hover .ant-select-selector {
    /* outline: 1px solid var(--orange-color); */
    border-color: var(--orange-color) !important;
    /* outline: none; */
  }
`;

export default AllCompanyService;
