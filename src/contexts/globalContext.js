import React, { useReducer, createContext } from 'react';

export const GlobalContext = createContext();

const initialState = {
  // General
  camButtonSelected: '',
  currentNodeInfo: {},
  currentNodeCamera1Config: {},
  currentNodeCamera3Config: {},
  currentNodeCamera2Config: {},
  currentNodeCamera1Settings: {},
  currentNodeCamera3Settings: {},
  currentNodeCamera2Settings: {},
  currentNodeCamera1Time: {},
  currentNodeCamera3Time: {},
  currentNodeCamera2Time: {},
  currentNodeCamera1NetworkSettings: {},
  currentNodeCamera3NetworkSettings: {},
  currentNodeCamera2NetworkSettings: {},
  currentNodePerfmon: [],
  currentNodePerfmonAdded: false,
  currentNodeSinglePerfmon: {},
  editNodeModal: false,
  homeMapModalVideoStreamer: false,
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
  nodeCameraSettingsoModal: false,
  nodes: [],
  numberOfNodes: 0,
  numberOfNodesUp: 0,
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
  videoPlayerStreamingActive: false,
  videoPlayersState: {},
  videoStreamingplayerPlaying: false,
  videoStreamingURLS: {},
  VideoSnapShotURLS: {},

  // RecordingViewer
  RecordingViewerModalOpen: false,
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
