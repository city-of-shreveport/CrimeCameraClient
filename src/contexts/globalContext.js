import React, { useReducer, createContext } from 'react';

export const GlobalContext = createContext();

const initialState = {
  nodes: [],
  servers: [],
  perfmons: [],
  streamingstats: [],
  streams: [],
  liveStreamingActive: false,
  videoPlayerActive: false,
  users: [],
  showHome: true,
  showSettings: false,
  showVMS: false,
  vmsModal: false,
  settingsModal: false,
  selectedNode: 'NONE',
  selectedVMSDate: new Date(),
  selectedVMSTimeMin: '00',
  selectedVMSTimeHour: '12',
  vmsTimeAMPM: 'AM',
  videoPlayer: {},
  videoPlayersState: {},
  homeSelectedNode: 'NONE',
  homeStreamingModal: false,
  homeViewVideosModal: false,
  homeSettingsModal: false,
  homeVideoDate: new Date(),
  homeVideoTimePM: false,
  homeVideoTimeHour: '00',
  homeVideoTimeMin: '00',
  nodeSettingsComponent: false,
  nodeSettingsNodeComponent: false,
  nodeSettingsCameraComponent: false,
  editNodeModal: false,
  nodeSelected: false,
  previousNode: ' ',
  currentNodeInfo: {
    createdAt: ' ',
    ip: ' ',
    lastCheckIn: ' ',
    name: ' ',
    config: {
      buddyDriveDevicePath: ' ',
      buddyDriveEncryptionKey: ' ',
      buddyDriveMountPath: ' ',
      sysInfo: {
        cpu: {
          brand: ' ',
          cores: ' ',
          vendor: ' ',
        },
        diskLayout: [
          {
            device: ' ',
            type: ' ',
            vendor: ' ',
            size: 0,
          },
        ],
        memLayout: [
          {
            clockSpeed: 0,
            size: 0,
            type: ' ',
          },
        ],
        osInfo: {
          arch: ' ',
          codename: ' ',
          distro: ' ',
          kernel: ' ',
          release: ' ',
        },
      },
      buddyDrives: [
        {
          hostName: ' ',
          sshfsMountPath: ' ',
        },
        {
          hostName: ' ',
          sshfsMountPath: ' ',
        },
      ],
      cameras: [
        {
          direction: 0,
          folderName: ' ',
          ip: '10.10.5.2',
          onlineStatus: false,
          password: ' ',
          type: ' ',
          username: ' ',
        },
        {
          direction: 0,
          folderName: ' ',
          ip: '10.10.5.3',
          onlineStatus: false,
          password: ' ',
          type: ' ',
          username: ' ',
        },
        {
          direction: 0,
          folderName: ' ',
          ip: '10.10.5.4',
          onlineStatus: false,
          password: ' ',
          type: ' ',
          username: ' ',
        },
      ],
      hostName: ' ',
      locationLat: ' ',
      locationLong: ' ',
      serverURL: ' ',
      videoDriveDevicePath: ' ',
      videoDriveEncryptionKey: ' ',
      videoDriveMountPath: ' ',
      zeroTierIP: ' ',
      zeroTierNetworkID: ' ',
    },
  },
  nodeForm: {},
  systemInfoModal: false,
  currentNodePerfmon: {
    mem: {
      used: 0,
      total: 0,
    },
    currentLoad: {
      avgLoad: 0,
      currentLoad: 0,
      currentLoadUser: 0,
      currentLoadSystem: 0,
    },
  },
  currentNodePerfmonAdded: false,
  systemSettingsNewServerFormModal: false,
  selectedNodeModalVMS: { modalCameraOpen: false, camButtonSelected: '' },
  selectedNodeVMS: { selectedNode1: '', selectedNode2: '', selectedNode3: '' },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATESELECTEDCAMERAVMS':
      return {
        ...state,
        selectedCameraVMS: action.payload,
      };

    case 'UPDATESELECTEDNODEVMS':
      return {
        ...state,
        selectedNodeVMS: action.payload,
      };
    case 'UPDATESELECTEDNODEMODALVMS':
      return {
        ...state,
        selectedNodeModalVMS: action.payload,
      };
    case 'UPDATE_VIDEOPLAYERACTIVE':
      return {
        ...state,
        videoPlayerActive: action.payload,
      };
    case 'UPDATE_LIVESTREAMINGACTIVE':
      return {
        ...state,
        liveStreamingActive: action.payload,
      };
    case 'UPDATE_SYSTEMSETTINGSSERVERFORM':
      return {
        ...state,
        systemSettingsNewServerFormModal: action.payload,
      };
    case 'UPDATE_CURRENT_NODE_PERFMON':
      return {
        ...state,
        currentNodePerfmon: action.payload,
        currentNodePerfmonAdded: true,
      };
    case 'SETTINGS_SYSTEMINFO_NODE_MODAL':
      return {
        ...state,
        systemInfoModal: action.payload,
      };
    case 'SETTINGS_EDIT_NODE_MODAL':
      return {
        ...state,
        editNodeModal: action.payload,
      };

    case 'UPDATESERVERS':
      return {
        ...state,
        servers: action.payload,
      };

    case 'UPDATENODES':
      return {
        ...state,
        nodes: action.payload,
      };
    case 'UPDATE_SELECTEDNODE':
      return {
        ...state,
        selectedNode: action.payload,
        nodeSelected: true,
      };
    case 'SETTINGS_NEW_NODE_MODAL':
      return {
        ...state,
        newNodeModal: action.payload,
      };
    case 'UPDATE_NODESYSCAMERACOMPONENT':
      return {
        ...state,
        nodeSettingsCameraComponent: action.payload,
      };
    case 'UPDATE_CURRENT_NODE_INFO':
      let previousNodeInfo = state.currentNodeInfo.name;
      return {
        ...state,
        previousNode: previousNodeInfo,
        currentNodeInfo: action.payload,
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
        vmsTimeAMPM: action.payload,
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

    case 'UPDATE_PERFMONS':
      return {
        ...state,
        perfmon: action.payload,
      };
    case 'UPDATE_STREAMINGSTATS':
      return {
        ...state,
        streamingstats: { restreamer01: action.payload, updated: new Date().toString() },
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
        showNodeManager: false,
        showVMS: false,
        showSystemManager: false,
        videoPlayerActive: false,
      };
    case 'showVMS':
      return {
        ...state,
        showHome: false,
        showNodeManager: false,
        showVMS: true,
        showSystemManager: false,
        videoPlayerActive: true,
      };
    case 'showNodeManager':
      return {
        ...state,
        showHome: false,
        showNodeManager: true,
        showVMS: false,
        showSystemManager: false,
        videoPlayerActive: false,
      };
    case 'showSystemManager':
      return {
        ...state,
        showHome: false,
        showNodeManager: false,
        showVMS: false,
        showSystemManager: true,
        videoPlayerActive: false,
      };

    default:
      throw new Error();
  }
};

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <GlobalContext.Provider value={[state, dispatch]}>{props.children}</GlobalContext.Provider>;
};
