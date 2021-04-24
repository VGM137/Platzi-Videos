const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      if (state.myList.length === 0) {
        return {
          ...state,
          myList: [...state.myList, action.payload],
        };
      } if (state.myList.length > 0) {
        let repeat = false;
        state.myList.forEach((item) => {
          if (item.id === action.payload.id) {
            repeat = true;
          }
        });
        if (repeat === false) {
          return {
            ...state,
            myList: [...state.myList, action.payload],
          };
        }
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    default:
      return state;
  }
};

export default reducer;
