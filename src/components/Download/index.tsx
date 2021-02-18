import React from "react";

import { Panel } from "./styles";

class Download extends React.Component {
    render() {
        return (
          <div className="header">
            <h1 className="Download-section"> DOWNLOAD </h1>
            <Panel> 
                <p> Hello </p>
            </Panel>
            <Panel>
                <p> Hi </p>
            </Panel>
          </div>
        );
    }
}

export default Download;