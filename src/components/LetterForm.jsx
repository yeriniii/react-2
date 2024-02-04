import { DataContext } from "context/DataContext";
import { useContext, useState } from "react";
import styled from "styled-components";

const LetterForm = () => {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [selectedMember, setSelectedMember] = useState("카리나");
  const { data, setData } = useContext(DataContext);
  const addFanLetter = () => {
    setData([
      ...data,
      {
        id: crypto.randomUUID(),
        createdAt: Date(),
        writedTo: selectedMember,
        nickname,
        content,
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickname === "" || content === "") {
      alert("팬 레터 폼을 모두 입력해주세요");
    } else if (nickname.length > 20) {
      alert("닉네임 20글자 초과입니다!");
    } else if (content.length > 100) {
      alert("내용 100자 초과입니다!");
    } else {
      addFanLetter();
      setNickname("");
      setContent("");
      setSelectedMember("카리나");
    }
  };

  return (
    <LetterFormWrapper>
      <AddForm onSubmit={handleSubmit}>
        <FormField>
          <label id="nickname">닉네임:</label>
          <textarea
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            cols="30"
            placeholder="최대 20글자까지 작성할 수 있습니다."
          ></textarea>
        </FormField>

        <FormField>
          <label id="content">내용:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            cols="30"
            rows="5"
            placeholder="최대 100자까지만 작성할 수 있습니다."
          ></textarea>{" "}
        </FormField>

        <FormField>
          <label id="selectmember">누구에게 보내실건가요?</label>
          <select
            id="aespa"
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
          >
            <option value="카리나">카리나</option>
            <option value="윈터">윈터</option>
            <option value="닝닝">닝닝</option>
            <option value="지젤">지젤</option>
          </select>
        </FormField>

        <SubmitButton>
          <button type="submit">팬레터 등록</button>
        </SubmitButton>
      </AddForm>
    </LetterFormWrapper>
  );
};

const LetterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  width: 40%;
  height: 30%;
  margin-top: 12px;
  border-radius: 8px;
  align-items: center;
  padding: 20px;
`;
const AddForm = styled.form`
  width: 100%;
  margin-bottom: 20px;
`;
const FormField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    flex: 0 0 30%; /* 레이블 너비를 30%로 설정 */
    font-weight: bold;
  }

  textarea,
  select {
    flex: 1; /* 입력 공간을 나머지 공간 모두로 확장 */
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const SubmitButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    padding: 10px 20px;
    border: none;
    font-weight: bold;
    border-radius: 5px;
    background-color: black;
    color: white;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      background-color: gold;
      color: black;
    }
  }
`;
export default LetterForm;
