import React, { useReducer, createContext } from 'react';

export const ContactContext = createContext();

const initialState = {
  perfmon:[],
  cams:[],
  todos: [
    {
      userId: 2,
      id: 2,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 3,
      id: 3,
      title: 'delectus aut autem',
      completed: false,
    },
  ],
  contacts: [
    {
      id: '098',
      name: 'Diana Prince',
      email: 'diana@us.army.mil',
    },
    {
      id: '099',
      name: 'Bruce Wayne',
      email: 'bruce@batmail.com',
    },
    {
      id: '100',
      name: 'Clark Kent',
      email: 'clark@metropolitan.com',
    },
  ],
  loading: false,
  error: null,
  showHome: true,
  showVMS: false,
  showSettings: false
};

const reducer = (state, action) => {
  
  switch (action.type) {
    case 'ADD_CAMS':
      return {
        cams: action.payload,
      };
      case 'ADD_PERFMON':
      return {
        perfmon: action.payload,
      };
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload],
      };
    case 'ADD_CONTACT':
      return {
        contacts: [...state.contacts, action.payload],
      };
    case 'DEL_CONTACT':
      return {
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    case 'START':
      return {
        loading: true,
      };
    case 'COMPLETE':
      return {
        loading: false,
      };
     case "showHideHome":
        return {
        showHome: true,
        showVMS: false,
        showSettings: false
      };
        
        break;
      case "showHideVMS":
         return {
        showVMS: true,
        showHome: false,
        showSettings: false
      };
       case "showHideSettings":
         return {
        showSettings: true,
        showHome: false,
        showVMS: false,
      };
        break;
    default:
      throw new Error();
  }
};

export const ContactContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ContactContext.Provider value={[state, dispatch]}>{props.children}</ContactContext.Provider>;
};
