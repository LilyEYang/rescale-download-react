import React from "react";

import { Panel, Section } from "./styles";
import Button from "./../Button/index";

class Download extends React.Component {
    render() {
        return (
          <div className="header">
            <Section>
              <h1 className="download-title"> DOWNLOAD FILES FROM RESCALE </h1>
              <div className="panels">
                <Panel className="panel"> 
                  <p> Hello </p>
                </Panel>
                <Panel className="panel">
                  <p className="panelTitle"> LOCAL </p>
                  <p className="panelSubheading"> SELECTED DOWNLOAD DESTINATION </p>
                  <p className="downloadDest"> Users/Downloads/Rescale </p>
                  <Button>SELECT DOWNLOAD DESTINATION</Button>
                </Panel>
              </div>
            </Section>
          </div>
        );
    }
}

export default Download;