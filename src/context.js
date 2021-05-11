import React, { useState } from 'react';

const CamerasDataContext = React.createContext([{}, () => {}]);

const CamerasDataProvider = (props) => {
  const [state, setState] = useState({});
  return <CamerasDataContext.Provider value={[state, setState]}>{props.children}</CamerasDataContext.Provider>;
};

 export default  CamerasDataContext
