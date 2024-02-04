import { DataContext } from "context/DataContext";
import styled from "styled-components";
import Letter from "./Letter";
import { useContext } from "react";

const LetterList = ({ selectMember }) => {
  const { data } = useContext(DataContext);
  const filteredLetter = data.filter((letter) => {
    return letter.writedTo === selectMember;
  });
  return (
    <LetterListWrapper>
      {filteredLetter.length > 0 ? (
        filteredLetter.map((Fandata) => <Letter Fandata={Fandata}></Letter>)
      ) : (
        <p>
          {selectMember}에게 남겨진 팬레터가 없습니다. 첫 번째 팬 레터의
          주인공이 되어주세요!
        </p>
      )}
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
