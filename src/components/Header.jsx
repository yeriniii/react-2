import React from "react";
import styled from "styled-components";
import MemberTabs from "./MemberTabs";

const Header = ({ setSelectMember, selectMember }) => {
  return (
    <Container>
      <Title>에스파 팬레터 컬렉션</Title>
      <MemberTabs
        selectMember={selectMember}
        setSelectMember={setSelectMember}
      ></MemberTabs>
    </Container>
  );
};
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;
const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: green;
`;
export default Header;
