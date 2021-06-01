import React, { useReducer, createContext } from 'react';

export const GlobalContext = createContext();

const initialState = {
  nodes: [],
  perfmons: [],
  streamingstats: [],
  streams: [],
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
  vmsTimePM: false,
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
          sshfsMountPath: ' ' 
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
};

const reducer = (state, action) => {
  switch (action.type) {
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
      return {
        ...state,
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
      };
    case 'showVMS':
      return {
        ...state,
        showHome: false,
        showNodeManager: false,
        showVMS: true,
        showSystemManager: false,
      };
    case 'showNodeManager':
      return {
        ...state,
        showHome: false,
        showNodeManager: true,
        showVMS: false,
        showSystemManager: false,
      };
    case 'showSystemManager':
      return {
        ...state,
        showHome: false,
        showNodeManager: false,
        showVMS: false,
        showSystemManager: true,
      };

    default:
      throw new Error();
  }
};

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <GlobalContext.Provider value={[state, dispatch]}>{props.children}</GlobalContext.Provider>;
};
