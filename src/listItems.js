import React, { useContext } from "react";
import { CamerasDataContext } from "./context";
function EventMoreData() {
 const Cameras = useContext(CamerasDataContext)
    return (
        <>
            <div><ul>
            {Cameras.cams.map(cam => (
                    <li>{cam.lat} {cam.lng}</li>
                ))}
            </ul></div>
        </>
  )
}
export default EventMoreData