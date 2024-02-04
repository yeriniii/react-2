import React from "react";
import Header from "../components/Header";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import { useState } from "react";
import styled from "styled-components";

function Home() {
  const [selectMember, setSelectMember] = useState("카리나");

  return (
    <Container>
      <Header selectMember={selectMember} setSelectMember={setSelectMember} />
      <LetterForm />
      <LetterList selectMember={selectMember} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Home;
