import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

const MemberTabs = ({ setSelectMember, selectMember }) => {
  return (
    <Wrapper
      onClick={(e) => {
        setSelectMember(e.target.textContent);
      }}
    >
      <Tab selectMember={selectMember}>카리나</Tab>
      <Tab selectMember={selectMember}>윈터</Tab>
      <Tab selectMember={selectMember}>닝닝</Tab>
      <Tab selectMember={selectMember}>지젤</Tab>
    </Wrapper>
  );
};
const Wrapper = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 30px;
  background-color: gray;
  padding: 10px;
  width: 45%;
  justify-content: space-between;
  border-radius: 9px;
  text-align: center;
`;

const Tab = styled.li`
  ${(props) => {
    if (props.selectMember === props.children) {
      return css`
        background-color: gold;
        color: black;
      `;
    }
    return css`
      background-color: black;
      color: white;
    `;
  }}

  display: flex; /* 내부 요소를 가운데 정렬하기 위해 flexbox 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  width: 100px;
  height: 40px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(0.9);
  }
`;

export default MemberTabs;
