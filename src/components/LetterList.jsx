import React, { useState } from "react";
import fakeData from "fakeData.json";
import styled from "styled-components";
import Letter from "./Letter";

const LetterList = ({ selectMember, data }) => {
  const filteredLetter = data.filter((letter) => {
    return letter.writedTo === selectMember;
  });
  return (
    <LetterListWrapper>
      {filteredLetter.map((Fandata) => (
        <Letter Fandata={Fandata}></Letter>
      ))}
    </LetterListWrapper>
  );
};
const LetterListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  margin-top: 20px;
  width: 40%;
  color: white;
  border-radius: 5px;
  padding: 20px;
`;
export default LetterList;
