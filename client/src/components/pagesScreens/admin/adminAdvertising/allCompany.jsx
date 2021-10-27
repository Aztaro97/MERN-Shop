import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import {
  getAllAdService,
  filterByTypeBusiness,
  updateAllowService,
  deleteAdService,
  searchCompanyName,
} from "../../../../flux/actions/advertisingAction/advertisingAction";
import LoaderComponent from "../../../loader";
import { useHistory } from "react-router";
import { Col, Popconfirm, Row, Select, Input } from "antd";
import { BusinessList } from "../../../../utils/advertisingData";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { destroyImages } from "../../../../flux/actions/productAction";
const { Option } = Select;
const { Search } = Input;

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

  const handleDelete = (id, imageUrl) => {
    dispatch(deleteAdService(id));
    dispatch(destroyImages(imageUrl));
  };

  return (
    <AllCompanyContainer>
      <h3 className="title">list all services</h3>
      <Row>
        <Col xs={{ span: 12 }}>
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
        </Col>
        <Col xs={{ span: 12 }}>
          <Search
            // bordered={false}
            style={{ width: "200px" }}
            placeholder="SEARCH COMPANY"
            onSearch={(value) => dispatch(searchCompanyName(value))}
          />
        </Col>
      </Row>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <h3>Error: {error} </h3>
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                {/* <th>id</th> */}
                <th>name</th>
                <th>email</th>
                <th>Telephone</th>
                <th>address</th>

                <th>company</th>
                <th>plan</th>
                <th>Allowed</th>
                <th>Control</th>
              </tr>
            </thead>
            <tbody>
              {listAdService.map((ad) => (
                <tr key={ad._id}>
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
                        <span>Bussiness:</span> {ad.typeBusiness}
                      </li>
                      <li className="about">
                        <span>about:</span> {ad.about}
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Type: {ad.typePlan}</li>
                      {ad.isPaid && <li>Price: {ad.totalPrice} dh</li>}
                    </ul>
                  </td>
                  <td>
                    <Switch
                      onChange={(check) => handleToggleChange(ad._id, check)}
                      checked={ad.allow}
                    />
                  </td>
                  <td>
                    <div className="control_container">
                      <Link href={`/admin/advertising/edit/${ad._id}`}>
                        <FaRegEdit className="icon edit" />
                      </Link>
                      <Popconfirm
                        title="Are you sure to delete ?"
                        okText="Yes"
                        onConfirm={() => handleDelete(ad._id, ad.serviceUrl)}
                        cancelText="No"
                      >
                        <Link>
                          <MdDelete className="icon delete" />
                        </Link>
                      </Popconfirm>
                    </div>
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
    text-transform: uppercase;
    font-weight: 700;
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
        text-align: center;
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
        & .control_container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 5px;

          & .icon {
            font-size: 1.2rem;
            transition: all 0.3s ease-in-out;
            &.delete {
              color: #e74c3c;
              &:hover {
                transform: scale(1.2);
              }
            }
            &.edit {
              color: #111;
              &:hover {
                transform: scale(1.2);
              }
            }
          }
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

const Link = styled.a``;

export default AllCompanyService;
