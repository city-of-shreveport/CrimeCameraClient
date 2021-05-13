import React, { useReducer, createContext } from 'react';

export const GlobalContext = createContext();

const initialState = {
  cams: [],
  perfmons: [],
  todos: [],
  users: [],
  showHome: true,
  showSettings: false,
  showVMS: false,
};

const reducer = (state, action) => {
  console.log(state);

  switch (action.type) {
    case 'UPDATE_CAMS':
      return {
        ...state,
        cams: action.payload,
      };
    case 'UPDATE_PERFMONS':
      return {
        ...state,
        perfmon: action.payload,
      };
    case 'UPDATE_TODOS':
      return {
        ...state,
        todos: action.payload,
      };
    case 'UPDATE_USERS':
      return {
        ...state,
        users: action.payload,
      };
    case 'showHome':
      return {
        ...state,
        showHome: true,
        showSettings: false,
        showVMS: false,
      };
    case 'showVMS':
      return {
        ...state,
        showHome: false,
        showSettings: false,
        showVMS: true,
      };
    case 'showSettings':
      return {
        ...state,
        showHome: false,
        showSettings: true,
        showVMS: false,
      };
    default:
      throw new Error();
  }
};

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <GlobalContext.Provider value={[state, dispatch]}>{props.children}</GlobalContext.Provider>;
};
