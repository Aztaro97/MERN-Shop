import React, { useState } from "react";
import { Input } from "antd";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const { Search } = Input;

function SearchBox({ history }) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(e);
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <Form onSubmit={handleSearch}>
      <input
        type="text"
        value={keyword}
        placeholder="Search Product"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">
        <BsSearch />
      </button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  & input {
    color: var(--dark-color);
    background: transparent;
    outline: none;
    border: 1px solid var(--dark-color);
    padding: 4px 10px;
    &:focus {
      border: 1px solid var(--dark-color);
    }
    &:hover {
      border: 2px solid var(--dark-color);
      cursor: pointer;
    }
  }

  & button {
    border: 1px solid var(--dark-color);
    color: var(--dark-color);
    background: transparent;
    padding: 4px 10px;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: var(--orange-color);
      border-color: none !important;
      color: var(--white-color);
      border: 1px solid var(--orange-color);
    }
  }
`;

export default SearchBox;
