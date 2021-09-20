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
  restreamerStreams: [],
  restreamerServerStats: [],
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
  videoPlayerReset: false,
  videoPlayerResetInitial: null,
  videoPlayerStreamingActive: false,
  videoPlayersState: {},
  videoStreamingplayer1Playing: false,
  videoStreamingplayer2Playing: false,
  videoStreamingplayer3Playing: false,
  videoStreamingURLS: {},
  VideoSnapShotURLS: {},
  StreamingViewerPlayer1Reference: null,
  StreamingViewerPlayer2Reference: null,
  StreamingViewerPlayer3Reference: null,

  videStremingPlayers: {
    videoStreamerPlayer1Buffer: false,
    videoStreamerPlayer2Buffer: false,
    videoStreamerPlayer3Buffer: false,
  },

  // RecordingViewer
  RecordingViewerAvailableNodes: [],
  RecordingViewerAvailableTimes: [],
  RecordingViewerCurrentSlide: 0,
  RecordingViewerDateSelected: undefined,
  RecordingViewerDurationPlayed: 0,
  RecordingViewerFormIsLoading: false,
  RecordingViewerIsPlaying: false,
  RecordingViewerIsSeeking: false,
  RecordingViewerModalOpen: false,
  RecordingViewerNode1Camera1URL: '/camera.mp4',
  RecordingViewerNode1Camera2URL: '/camera.mp4',
  RecordingViewerNode1Camera3URL: '/camera.mp4',
  RecordingViewerNode1Selected: null,
  RecordingViewerNode2Camera1URL: '/camera.mp4',
  RecordingViewerNode2Camera2URL: '/camera.mp4',
  RecordingViewerNode2Camera3URL: '/camera.mp4',
  RecordingViewerNode2Selected: null,
  RecordingViewerNode3Camera1URL: '/camera.mp4',
  RecordingViewerNode3Camera2URL: '/camera.mp4',
  RecordingViewerNode3Camera3URL: '/camera.mp4',
  RecordingViewerNode3Selected: null,
  RecordingViewerPlayer1Reference: null,
  RecordingViewerPlayer2Reference: null,
  RecordingViewerPlayer3Reference: null,
  RecordingViewerPlayer4Reference: null,
  RecordingViewerPlayer5Reference: null,
  RecordingViewerPlayer6Reference: null,
  RecordingViewerPlayer7Reference: null,
  RecordingViewerPlayer8Reference: null,
  RecordingViewerPlayer9Reference: null,
  RecordingViewerTimeSelected: undefined,
  RecordingViewerVideoUniqueDates: [],
  RecordingViewerVideos: [],

  // SystemManager
  systemManagerServerFormName: 'Hostname',
  systemManagerServerFormType: 'Server',
  systemManagerServerFormIP: '192.168.0.1',
  systemManagerServerFormIsShowing: false,
  systemManagerServerList: [],
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
