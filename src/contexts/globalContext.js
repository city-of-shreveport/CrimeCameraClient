import React, { useReducer, createContext } from 'react';

export const GlobalContext = createContext();

const initialState = {
  // General
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
  liveStreamingActive: true,
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
  selectedNode: 'NONE',
  servers: [],
  serverstatistics: [],
  settingsModal: false,
  showDateTime: false,
  showHome: true,
  showNodesList: false,
  showSettings: false,
  streamingstats: [],
  streams: [],
  systemInfoModal: false,
  systemSettingsNewServerFormModal: false,
  users: [],
  videoPlayer: {},
  videoPlayerActive: false,
  videoPlayersState: {},

  // RecordingViewer
  RecordingViewerFileURLLists: {},
  RecordingViewerIsPlaying: false,
  RecordingViewerModalOpen: false,
  RecordingViewerSelectedDateTime: '',
  RecordingViewerSelectedNodes: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setState':
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
