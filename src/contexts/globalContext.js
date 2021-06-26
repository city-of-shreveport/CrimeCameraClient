import React, { useReducer, createContext } from 'react';

export const GlobalContext = createContext();

const initialState = {
  camButtonSelected: '',
  currentNodePerfmon: [],
  currentNodePerfmonAdded: false,
  currentNodeSinglePerfmon: {},
  editNodeModal: false,
  homeSelectedNode: 'NONE',
  homeSettingsModal: false,
  homeStreamingModal: false,
  homeVideoDate: new Date(),
  homeVideoTimeHour: '00',
  homeVideoTimeMin: '00',
  homeVideoTimePM: false,
  homeViewVideosModal: false,
  isPlayingVMS: false,
  liveStreamingActive: true,
  modalSelectNodeVMS: false,
  nodeForm: {},
  nodeSelected: false,
  nodeSettingsCameraComponent: false,
  nodeSettingsChartPerfMonModal: false,
  nodeSettingsComponent: false,
  nodeSettingsNodeComponent: false,
  nodes: [],
  perfmons: [],
  previousNode: '',
  restreamerStreamsStats: [],
  restreamerserverstatistics: [],
  selectedNode1VMS: '',
  selectedNode2VMS: '',
  selectedNode3VMS: '',
  selectedNode4VMS: '',
  selectedNode: 'NONE',
  selectedNodesArray: [],
  selectedVMSDate: new Date(),
  selectedVMSTimeHour: '12',
  selectedVMSTimeMin: '00',
  servers: [],
  serverstatistics: [],
  settingsModal: false,
  showDateTime: false,
  showHome: true,
  showNodesList: false,
  showSettings: false,
  showVMS: false,
  streamingstats: [],
  streams: [],
  systemInfoModal: false,
  systemSettingsNewServerFormModal: false,
  users: [],
  videoPlayer: {},
  videoPlayerActive: false,
  videoPlayersState: {},
  vmsModal: false,
  vmsTimeAMPM: 'AM',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateState':
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw new Error();
  }
};

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <GlobalContext.Provider value={[state, dispatch]}>{props.children}</GlobalContext.Provider>;
};
