import React from "react";

import { Panel, Section, Header } from "./styles";
import Button from "./../Button/index";

class Download extends React.Component {
    render() {
        return (
          <div className="header">
            <Header>
              <p>Rescale Transfer Manager</p>
            </Header>
            <Section>
              <h1 className="download-title"> DOWNLOAD FILES FROM RESCALE </h1>
              <div className="panels">
                <Panel> 
                  <p> Hello </p>
                </Panel>
                <Panel>
                  <p className="panelTitle"> LOCAL </p>
                    <p className="panelSubheading"> SELECTED DOWNLOAD DESTINATION </p>
                    <p className="downloadDest"> Users/Downloads/Rescale </p>
                    <div className="button">
                      <Button>SELECT DOWNLOAD DESTINATION</Button>
                    </div>
                </Panel>
              </div>
            </Section>
          </div>
        );
    }
}

export default Download;