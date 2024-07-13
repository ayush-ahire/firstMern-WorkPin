import { createContext, useReducer } from "react";
export const workContext = createContext();

export const worksReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKPIN":
      return {
        works: action.payload,
      };
    case "DELETE_WORKPIN":
      return {
        works: state.works.filter((w) => w._id !== action.payload._id),
      };
    case "UPDATE_WORKPIN":
      return {
        works: state.works.filter((w) => w._id !== action.payload._id),
      };
    case "CREATE_WORKPIN":
      return {
        works: [action.payload, ...state.works],
      };

    default:
      return state;
  }
};

export const WorksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(worksReducer, {
    works: null,
  });

  return (
    <workContext.Provider value={{ ...state, dispatch }}>
      {children}
    </workContext.Provider>
  );
};
