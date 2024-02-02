import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import default_profile from "../assets/default_profile.png";

function Detail({ data }) {
  const { id } = useParams();
  const { avatar, nickname, createdAt, writedTo, content } = data.find(
    (item) => item.id === id
  );
  const navigate = useNavigate();
  return (
    <>
      <HomeBtn>
        <button onClick={() => navigate(`/`)}>Home</button>
      </HomeBtn>
      <LetterDetailWrapper>
        <Container>
          <FanImage>
            <img src={avatar ? avatar : default_profile} alt="이미지"></img>
          </FanImage>
          <NewFanInfo>
            <p>{nickname}</p>
            <p>{createdAt}</p>
          </NewFanInfo>
        </Container>
        <WritedTo>
          <p>To: {writedTo}</p>
        </WritedTo>
        <NewContent>{content}</NewContent>
        <ButtonWrapper>
          <button>수정</button>
          <button>삭제</button>
        </ButtonWrapper>
      </LetterDetailWrapper>
    </>
  );
}
const LetterDetailWrapper = styled.div`
  background-color: gray;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const NewFanInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;

  p:nth-child(1) {
    font-size: 30px;
    font-weight: bold;
    margin-left: 20px;
  }
  p:nth-child(2) {
    margin-left: 20px;
    margin-top: 20px;
  }
`;
const WritedTo = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
const NewContent = styled.div`
  background-color: black;
  margin-top: 15px;
  color: white;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  height: 60%;
  padding: 20px;
  border-radius: 8px;
`;
const FanImage = styled.div`
  width: 110px;
  overflow: hidden;
  height: 110px;
  border-radius: 50%;
  &img {
    width: 100%;
    height: auto;
    border-radius: 50px;
    object-fit: cover;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: tomato;
    }
  }
`;
const HomeBtn = styled.div`
  margin: 60px;
  button {
    border: none;
    background-color: black;
    color: white;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: gold;
      color: black;
      transform: scale(1.2);
    }
  }
`;
export default Detail;
