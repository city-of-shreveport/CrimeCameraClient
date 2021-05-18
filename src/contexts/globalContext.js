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
  videoPlayersState:{},
  homeSelectedCamera: 'NONE',
  homeStreamingModal: false,
  homeViewVideosModal: false,
  homeSettingsModal: false,
  homeVideoDate: new Date(),
  homeVideoTimePM: false,
  homeVideoTimeHour: '00',
  homeVideoTimeMin: '00',
  cameraSettingsComponent: false,
  cameraSettingsCameraComponent: false,
  currentCamInfo: null
};
const reducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    
        case 'UPDATE_CAMERASYSCAMERACOMPONENT':
      return {
        ...state,
        cameraSettingsCameraComponent: action.payload,
      };
    case 'UPDATECURRENTCAMINFO':
      return {
        ...state,
        currentCamInfo: action.payload,
      };
  case 'UPDATE_CAMERASYSCOMPONENT':
      return {
        ...state,
        cameraSettingsComponent: action.payload,
      };
     case 'UPDATE_CAMERASETTINGSMODAL':
      return {
        ...state,
        cameraSettingsModal: action.payload,
      };
       case 'UPDATEHOMEVIDEOTIMEHOUR':
      return {
        ...state,
        homeVideoTimeHour: action.payload,
      };
       case 'UPDATEHOMEVIDEOTIMEMIN':
      return {
        ...state,
        homeVideoTimeMin: action.payload,
      };
       case 'UPDATEHOMEVIDEOTIMEPM':
      return {
        ...state,
        homeVideoTimePM: action.payload,
      };

       case 'UPDATEHOMEVIDEODATE':
      return {
        ...state,
        homeVideoDate: action.payload,
      };
    case 'HOMESETTINGSMODAL':
      return {
        ...state,
        homeSettingsModal: action.payload,
      };
      case 'HOMEVIEWVIDEOSMODAL':
      return {
        ...state,
        homeViewVideosModal: action.payload,
      };

   case 'HOMESTREAMINGMODAL':
      return {
        ...state,
        homeStreamingModal: action.payload,
      };
    case 'UPDATE_HOMESELECTEDCAM':
      return {
        ...state,
        homeSelectedCamera: action.payload,
      };
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
        showCamMngr: false,
        showVMS: false,
        showSysMngr: false
      };
    case 'showVMS':
      return {
        ...state,
        showHome: false,
        showCamMngr: false,
        showVMS: true,
        showSysMngr: false

      };
    case 'showCamMngr':
      return {
        ...state,
        showHome: false,
        showCamMngr: true,
        showVMS: false,
        showSysMngr: false

      };
          case 'showSysMngr':
      return {
        ...state,
        showHome: false,
        showCamMngr: false,
        showVMS: false,
        showSysMngr: true

      };


    default:
      throw new Error();
  }
};

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <GlobalContext.Provider value={[state, dispatch]}>{props.children}</GlobalContext.Provider>;
};
