const SELECT_MEMBER = "member/SELECT_MEMBER";

export const selectMember = (payload) => {
  return {
    type: SELECT_MEMBER,
    payload,
  };
};

const initialState = "카리나";
const member = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MEMBER:
      return (state = action.payload);
    default:
      return state;
  }
};
export default member;
