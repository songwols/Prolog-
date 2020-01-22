import React from "react";
import { Plus } from "styled-icons/boxicons-regular/Plus";
import styled from "styled-components";

export const PlusIcon = styled(Plus)`
  width: 60px;
  cursor: pointer;
  padding-top: 0.1rem;
  margin-right: 0.5rem;
  color: black;
  :hover{
    opacity: 0.5;
  }
`;

const Write = () => {
  const PlusClick = () => {
    alert("아이콘을 눌렀어요!");
  };

  const PostClick = () => {
    alert("Post를 눌렀어요!");
  };
  const PortfolioClick = () => {
    alert("Portfolio를 눌렀어요!");
  };

  return (
    <WriteLayout>
      <PlusIcon onClick={PlusClick}></PlusIcon>
      <SelectMenus className="a">
        <SelectMenu onClick={PostClick}>Post</SelectMenu>
        <SelectMenu onClick={PortfolioClick}>Portfolio</SelectMenu>
      </SelectMenus>
    </WriteLayout>
  );
};

const SelectMenus = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  
`;
const WriteLayout = styled.div`
  position: relative;
  float: right;
  &:hover .a {
    display: block;
  }
`;
const SelectMenu = styled.a`
  color: black;
  padding: 12px 16px;
  display: block;
  cursor: pointer;
  :hover {
    background-color: #f1f1f1
  }
`;

export default Write;