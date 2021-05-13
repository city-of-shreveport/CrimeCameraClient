import React, { useReducer, createContext } from 'react';

export const GlobalContext = createContext();

const initialState = {
  perfmon: [],
  cams: [],
  loading: false,
  error: null,
  showHome: true,
  showVMS: false,
  showSettings: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CAMS':
      console.log(state);
      return {
        cams: action.payload,
      };
    case 'ADD_PERFMON':
      return {
        perfmon: action.payload,
      };
    case 'showHideHome':
      return {
        showHome: true,
        showVMS: false,
        showSettings: false,
      };
    case 'showHideVMS':
      return {
        showVMS: true,
        showHome: false,
        showSettings: false,
      };
    case 'showHideSettings':
      return {
        showSettings: true,
        showHome: false,
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
