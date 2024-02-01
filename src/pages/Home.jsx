import React from "react";
import Header from "../components/Header";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";

import { useState } from "react";
import fakeData from "fakeData.json";
import styled from "styled-components";

function Home() {
  const [selectMember, setSelectMember] = useState("카리나");
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [selectedMember, setSelectedMember] = useState("카리나");
  const [data, setData] = useState(fakeData);
  return (
    <Container>
      <Header selectMember={selectMember} setSelectMember={setSelectMember} />
      <LetterForm
        nickname={nickname}
        setNickname={setNickname}
        content={content}
        setContent={setContent}
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
        data={data}
        setData={setData}
      />
      <LetterList selectMember={selectMember} data={data} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Home;
