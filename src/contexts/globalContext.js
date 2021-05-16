import React, { useReducer, createContext } from 'react';

export const GlobalContext = createContext();

const initialState = {
  cams: [],
  perfmons: [],
  streamingstats: [],
  streams: [],
  users: [],
  showHome: true,
  showSettings: false,
  showVMS: false,
  vmsModal: false,
  settingsModal: false,
  selectedCamera:'NONE',
  selectedVMSDate: new Date(),
  selectedVMSTimeMin: '00',
  selectedVMSTimeHour: '12',
  vmsTimePM:false,
  videoPlayer:{},
  videoPlayersState:{}
};

const reducer = (state, action) => {
  console.log(state);

  switch (action.type) {
    
    case 'SETVIDEOPLAYERSTATE':
      return {
        ...state,
        videoPlayersState: action.payload,
        
        
      };
    case 'SETVIDEOSTATE':
      return {
        ...state,
        videoPlayer: action.payload,
        
        
      };
    case 'UPDATE_VMSTIMEAMPM':
      return {
        ...state,
        vmsTimePM: action.payload,
        
        
      };
      case 'UPDATE_VMSTIMEHOURVALUE':
      return {
        ...state,
        selectedVMSTimeHour: action.payload,
        
        
      };
     case 'UPDATE_VMSTIMEMINVALUE':
      return {
        ...state,
        selectedVMSTimeMin: action.payload,
        
        
      };
     case 'UPDATE_VMSCALVALUE':
      return {
        ...state,
        selectedVMSDate: action.payload,
        
        
      };
      case 'UPDATE_SELECTEDCAMERA':
      return {
        ...state,
        selectedCamera: action.payload,
        settingsModal: true
        
      };
      
      case 'UPDATE_VMSDateTimeMODAL':
      return {
        ...state,
        vmsModal: action.payload,
      };
    case 'UPDATE_SETTINGSMODAL':
      return {
        ...state,
        settingsModal: action.payload,
      };
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
    case 'UPDATE_STREAMINGSTATS':
      return {
        ...state,
        streamingstats: {'restreamer01':action.payload, 'updated':new Date().toString() },
      };
    case 'UPDATE_STREAMS':
      return {
        ...state,
        streams: action.payload,
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
