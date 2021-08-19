import React from "react";
import styled from "styled-components";
// import { Pagination } from "antd";
import { useHistory } from "react-router-dom";
import { useParams, NavLink } from "react-router-dom";

// const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
//   const history = useHistory();
//   const elementsPerPage = 2;
//   const offset = 0
//   const currentPageElements = [];
//   const pagesCount = 1;
//   const totalElementsCount = 0;

//   const handlePageClick = () => {

//     const currentPage = pages - 1;
//     const offset = currentPage * elementsPerPage;
//     history.push(`/product/${offset}`)

//   };
//   const currentPageElements  = () => {

//   }
//   return (
//     pages > 1 && (
//       <Pagination
//         defaultCurrent={1}
//         onChange={handlePageClick}
//         size="small"
//         total={pages}
//         showTotal={(total, range) =>
//           `${range[0]}-${range[1]} of ${total} items`
//         }
//         pageSize={elementsPerPage}
//         showSizeChanger={false}
//       />
//     )
//   );
// };

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  const params = useParams();
  const userId = params.id;

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkC
            activeStyle={{
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: "var(--orange-color)",
            }}
            active={x + 1 === page}
            key={x + 1}
            to={
              !isAdmin
                ? userId
                  ? `/profile/${userId}/page/${x + 1}`
                  : `/products/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            {x + 1}
            {/* <button
              className="btn active"

            >

            </button> */}
          </LinkC>
        ))}
      </Pagination>
    )
  );
};

const Pagination = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  line-height: 20px;
  flex-wrap: wrap;
`;

const LinkC = styled(NavLink)`
  text-decoration: none;
  outline: none;
  border: none;
  padding: 10px 13px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  /* border: 1px solid #000; */
  color: #000;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

export default Paginate;

// /profile/${userid}/${x + 1}
