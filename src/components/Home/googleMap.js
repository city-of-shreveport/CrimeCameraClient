import GoogleMapReact from 'google-map-react';
import React, { useContext } from 'react';
import tryValue from '../../helperFunctions';
import { GlobalContext } from '../../contexts/globalContext';
var cameras = ["camera1","camera2","camera3"]
var currentCamera = "";
export default function GoogleMap() {
  const [state, dispatch] = useContext(GlobalContext);
  
  
  const handleApiLoaded = (map, maps) => {
    var bounds = new maps.LatLngBounds();
    const markers = [];
    let nodeIcon = '';

    // eslint-disable-next-line
    var prev_infowindow = false;
    // eslint-disable-next-line
    var current_infowindow = false;

    // eslint-disable-next-line
    const mapStyles = {
      width: '100%',
      height: '100%',
    };
    var status = '';
    var timesRunGetNodes = 0;
    var intervalGetNodes = setInterval(() => {
      timesRunGetNodes += 1;
      if (timesRunGetNodes === 10) {
        clearInterval(intervalGetNodes);
      }

      // eslint-disable-next-line
      state.nodes.map((node) => {
        var difference = getDifferenceInMinutes(new Date(node.lastCheckIn), new Date());
        if (difference < 7200) {
        if (difference < 15) {
          nodeIcon = 'http://maps.google.com/mapfiles/kml/paddle/grn-blank.png';
          status = 'up';
        }
        if (difference > 15) {
          nodeIcon = 'http://maps.google.com/mapfiles/kml/paddle/red-blank.png';
          status = 'down';
        }
        var myLatLng = new maps.LatLng(node.config.locationLat, node.config.locationLong);
        if (markers.indexOf({ node: node.name }) === -1) {
          markers.push(
            new maps.Marker({
              selectedNodeObj: node,
              node: node.name,
              nodeIP: node.config.ip,
              position: {
                lat: node.config.locationLat,
                lng: node.config.locationLong,
              },
              map,
              icon: { url: nodeIcon, labelOrigin: { x: 33, y: 17 } },
              label: {
                text: node.name.substr(node.name.length - 3),

                color: 'black',
              },
              status: status,
            })
          );
          bounds.extend(myLatLng);
        }
        map.fitBounds(bounds);
      }
      });
      const key = 'demo'
      markers.forEach((marker, i) => {
        if (marker.status === 'up') {
          let streamName = marker.node + "Camera1"
          let streamName2 = marker.node + "Camera2"
          let streamName3 = marker.node + "Camera3"
          var dataPacket = {"name": streamName,
            "channels": {
              "0": {
                "name": "Camera1",
                "url": "rtsp://admin:UUnv9njxg123@" +marker.nodeIP+ ":554/cam/realmonitor?channel=1&subtype=1",
                "on_demand": true,
                "debug": false,
                "status": 0
              }
           
            }
          }
          var dataPacket2 = {"name": streamName2,
            "channels": {
              "0": {
                "name": "Camera2",
                "url": "rtsp://admin:UUnv9njxg123@" +marker.nodeIP+ ":554/cam/realmonitor?channel=1&subtype=1",
                "on_demand": true,
                "debug": false,
                "status": 0
              }
           
            }
          }
          var dataPacket3 = {"name": streamName3,
            "channels": {
              "0": {
                "name": "Camera3",
                "url": "rtsp://admin:UUnv9njxg123@" +marker.nodeIP+ ":554/cam/realmonitor?channel=1&subtype=1",
                "on_demand": true,
                "debug": false,
                "status": 0
              }
           
            }
          }
          const requestOptions = {
            method: 'POST',
            withCredentials: true,
            headers: {
            'Content-Type': 'application/json' },
            body: JSON.stringify(dataPacket)
        }
          const requestOptions2 = {
            method: 'POST',
            withCredentials: true,
            headers: {
            'Content-Type': 'application/json' },
            body: JSON.stringify(dataPacket2)
        }
        const requestOptions3 = {
          method: 'POST',
          withCredentials: true,
          headers: {
          'Content-Type': 'application/json' },
          body: JSON.stringify(dataPacket3)
      }
          marker.addListener('click', () => {
            fetch('http://10.10.30.200:8083/stream/'+streamName+'/add', requestOptions)
                       .then((response) => response.json())
                         .then((json) => { 
                           console.log(json)
                         })
                       .catch( (error) => { 
                         console.log(error)
                       });
            fetch('http://10.10.30.200:8083/stream/'+streamName2+'/add', requestOptions2)
                       .then((response) => response.json())
                         .then((json) => { 
                           console.log(json)
                         })
                       .catch( (error) => { 
                         console.log(error)
                       });
            fetch('http://10.10.30.200:8083/stream/'+streamName3+'/add', requestOptions3)
                       .then((response) => response.json())
                         .then((json) => { 
                           console.log(json)
                         })
                       .catch( (error) => { 
                         console.log(error)
                       });                      
            for(i=0;i<cameras.length;i++){

              console.log(cameras[i])
              currentCamera = cameras[i];
              var payload = {
                
                selectedNodeObj: marker.selectedNodeObj,
                modalChooseVideoBoxShow: true,
              }
              fetch('http://rtcc-server.shreveport-it.org:3000/api/videos/getlatestVideos/' +  marker.node)
              .then((response) => response.json())
                // eslint-disable-next-line
                .then((json) => {      
                 
                  if(json.camera1.length>6){
                    console.log(json.camera1)

                    var fileNameTime1 = json.camera1[0].fileLocation.split("-");
                    var min1 = fileNameTime1[4].split(".")
                    var fileNameTime2 = json.camera1[1].fileLocation.split("-");
                    var min2 = fileNameTime2[4].split(".")
                    var fileNameTime3 = json.camera1[2].fileLocation.split("-");
                    var min3 = fileNameTime3[4].split(".")
                    var fileNameTime4 = json.camera1[3].fileLocation.split("-");
                    var min4 = fileNameTime4[4].split(".")
                    var fileNameTime5 = json.camera1[4].fileLocation.split("-");
                    var min5 = fileNameTime5[4].split(".")
                    var fileNameTime6 = json.camera1[5].fileLocation.split("-");
                    var min6 = fileNameTime6[4].split(".")
                    var fileNameTime7 = json.camera1[6].fileLocation.split("-");
                    var min7 = fileNameTime7[4].split(".")
                    payload.Recordingcamera1File1= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera1/${json.camera1[0].fileLocation}/download`;
                    payload.Recordingcamera1file1Name= fileNameTime1[1] + "/" + fileNameTime1[2] + "/" + fileNameTime1[0] + "  " + fileNameTime1[3] + ":" + min1[0];
                    payload.Recordingcamera1File2= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera1/${json.camera1[1].fileLocation}/download`;
                    payload.Recordingcamera1file2Name= fileNameTime2[1] + "/" + fileNameTime2[2] + "/" + fileNameTime2[0] + "  " + fileNameTime2[3] + ":" + min2[0];
                    payload.Recordingcamera1File3= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera1/${json.camera1[2].fileLocation}/download`;
                    payload.Recordingcamera1file3Name= fileNameTime3[1] + "/" + fileNameTime3[2] + "/" + fileNameTime3[0] + "  " + fileNameTime3[3] + ":" + min3[0];
                    payload.Recordingcamera1File4= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera1/${json.camera1[3].fileLocation}/download`;
                    payload.Recordingcamera1file4Name= fileNameTime4[1] + "/" + fileNameTime4[2] + "/" + fileNameTime4[0] + "  " + fileNameTime4[3] + ":" + min4[0];
                    payload.Recordingcamera1File5= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera1/${json.camera1[4].fileLocation}/download`;
                    payload.Recordingcamera1file5Name= fileNameTime5[1] + "/" + fileNameTime5[2] + "/" + fileNameTime5[0] + "  " + fileNameTime5[3] + ":" + min5[0];
                    payload.Recordingcamera1File6= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera1/${json.camera1[5].fileLocation}/download`;
                    payload.Recordingcamera1file6Name= fileNameTime6[1] + "/" + fileNameTime6[2] + "/" + fileNameTime6[0] + "  " + fileNameTime6[3] + ":" + min6[0];
                    payload.Recordingcamera1File7= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera1/${json.camera1[6].fileLocation}/download`;
                    payload.Recordingcamera1file7Name= fileNameTime7[1] + "/" + fileNameTime7[2] + "/" + fileNameTime7[0] + "  " + fileNameTime7[3] + ":" + min7[0];

                  }


                  if(json.camera2.length>6){

                    var fileNameTime1 = json.camera2[0].fileLocation.split("-");
                    var min1 = fileNameTime1[4].split(".")
                    var fileNameTime2 = json.camera2[1].fileLocation.split("-");
                    var min2 = fileNameTime2[4].split(".")
                    var fileNameTime3 = json.camera2[2].fileLocation.split("-");
                    var min3 = fileNameTime3[4].split(".")
                    var fileNameTime4 = json.camera2[3].fileLocation.split("-");
                    var min4 = fileNameTime4[4].split(".")
                    var fileNameTime5 = json.camera2[4].fileLocation.split("-");
                    var min5 = fileNameTime5[4].split(".")
                    var fileNameTime6 = json.camera2[5].fileLocation.split("-");
                    var min6 = fileNameTime6[4].split(".")
                    var fileNameTime7 = json.camera2[6].fileLocation.split("-");
                    var min7 = fileNameTime7[4].split(".")
                    payload.Recordingcamera2File1= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera2/${json.camera2[0].fileLocation}/download`;
                    payload.Recordingcamera2file1Name= fileNameTime1[1] + "/" + fileNameTime1[2] + "/" + fileNameTime1[0] + "  " + fileNameTime1[3] + ":" + min1[0];
                    payload.Recordingcamera2File2= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera2/${json.camera2[1].fileLocation}/download`;
                    payload.Recordingcamera2file2Name= fileNameTime2[1] + "/" + fileNameTime2[2] + "/" + fileNameTime2[0] + "  " + fileNameTime2[3] + ":" + min2[0];
                    payload.Recordingcamera2File3= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera2/${json.camera2[2].fileLocation}/download`;
                    payload.Recordingcamera2file3Name= fileNameTime3[1] + "/" + fileNameTime3[2] + "/" + fileNameTime3[0] + "  " + fileNameTime3[3] + ":" + min3[0];
                    payload.Recordingcamera2File4= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera2/${json.camera2[3].fileLocation}/download`;
                    payload.Recordingcamera2file4Name= fileNameTime4[1] + "/" + fileNameTime4[2] + "/" + fileNameTime4[0] + "  " + fileNameTime4[3] + ":" + min4[0];
                    payload.Recordingcamera2File5= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera2/${json.camera2[4].fileLocation}/download`;
                    payload.Recordingcamera2file5Name= fileNameTime5[1] + "/" + fileNameTime5[2] + "/" + fileNameTime5[0] + "  " + fileNameTime5[3] + ":" + min5[0];
                    payload.Recordingcamera2File6= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera2/${json.camera2[5].fileLocation}/download`;
                    payload.Recordingcamera2file6Name= fileNameTime6[1] + "/" + fileNameTime6[2] + "/" + fileNameTime6[0] + "  " + fileNameTime6[3] + ":" + min6[0];
                    payload.Recordingcamera2File7= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera2/${json.camera2[6].fileLocation}/download`;
                    payload.Recordingcamera2file7Name= fileNameTime7[1] + "/" + fileNameTime7[2] + "/" + fileNameTime7[0] + "  " + fileNameTime7[3] + ":" + min7[0];
                  }

                  if(json.camera3.length>6){

                    var fileNameTime1 = json.camera3[0].fileLocation.split("-");
                    var min1 = fileNameTime1[4].split(".")
                    var fileNameTime2 = json.camera3[1].fileLocation.split("-");
                    var min2 = fileNameTime2[4].split(".")
                    var fileNameTime3 = json.camera3[2].fileLocation.split("-");
                    var min3 = fileNameTime3[4].split(".")
                    var fileNameTime4 = json.camera3[3].fileLocation.split("-");
                    var min4 = fileNameTime4[4].split(".")
                    var fileNameTime5 = json.camera3[4].fileLocation.split("-");
                    var min5 = fileNameTime5[4].split(".")
                    var fileNameTime6 = json.camera3[5].fileLocation.split("-");
                    var min6 = fileNameTime6[4].split(".")
                    var fileNameTime7 = json.camera3[6].fileLocation.split("-");
                    var min7 = fileNameTime7[4].split(".")
                    payload.Recordingcamera3File1= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera3/${json.camera3[0].fileLocation}/download`;
                    payload.Recordingcamera3file1Name= fileNameTime1[1] + "/" + fileNameTime1[2] + "/" + fileNameTime1[0] + "  " + fileNameTime1[3] + ":" + min1[0];
                    payload.Recordingcamera3File2= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera3/${json.camera3[1].fileLocation}/download`;
                    payload.Recordingcamera3file2Name= fileNameTime2[1] + "/" + fileNameTime2[2] + "/" + fileNameTime2[0] + "  " + fileNameTime2[3] + ":" + min2[0];
                    payload.Recordingcamera3File3= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera3/${json.camera3[2].fileLocation}/download`;
                    payload.Recordingcamera3file3Name= fileNameTime3[1] + "/" + fileNameTime3[2] + "/" + fileNameTime3[0] + "  " + fileNameTime3[3] + ":" + min3[0];
                    payload.Recordingcamera3File4= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera3/${json.camera3[3].fileLocation}/download`;
                    payload.Recordingcamera3file4Name= fileNameTime4[1] + "/" + fileNameTime4[2] + "/" + fileNameTime4[0] + "  " + fileNameTime4[3] + ":" + min4[0];
                    payload.Recordingcamera3File5= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera3/${json.camera3[4].fileLocation}/download`;
                    payload.Recordingcamera3file5Name= fileNameTime5[1] + "/" + fileNameTime5[2] + "/" + fileNameTime5[0] + "  " + fileNameTime5[3] + ":" + min5[0];
                    payload.Recordingcamera3File6= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera3/${json.camera3[5].fileLocation}/download`;
                    payload.Recordingcamera3file6Name= fileNameTime6[1] + "/" + fileNameTime6[2] + "/" + fileNameTime6[0] + "  " + fileNameTime6[3] + ":" + min6[0];
                    payload.Recordingcamera3File7= `http://rtcc-server.shreveport-it.org:3000/api/videos/stream/${marker.node}/camera3/${json.camera3[6].fileLocation}/download`;
                    payload.Recordingcamera3file7Name= fileNameTime7[1] + "/" + fileNameTime7[2] + "/" + fileNameTime7[0] + "  " + fileNameTime7[3] + ":" + min7[0];

                  }

                  }).then(() => {      
                    dispatch({
                      type: 'setState',
                      payload: payload,
                    })
                  })
                  
              }
            console.log(marker.node);
       
          });
        }
      });
    }, 500);
  };

  function getDifferenceInMinutes(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60);
  }

  return (
    <div id="googleMapDIV" style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAxgBe1BLPLfPIPwK0ucb6-SeqkZdckChI' }}
        defaultCenter={{ lat: 32.46, lng: -93.7550222 }}
        defaultZoom={11}
        layerTypes={['TrafficLayer', 'TransitLayer']}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      ></GoogleMapReact>
    </div>
  );
}
