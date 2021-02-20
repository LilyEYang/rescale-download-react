import React from "react";

import { Panel, FileBox } from "./styles";

class Download extends React.Component {
  fileList = [
    {
      id: 1,
      fileName: "file1.txt"
    },
    {
      id: 2,
      fileName: "data1.txt"
    },
    {
      id: 3,
      fileName: "file2.txt"
    }];

  listItems = this.fileList.map((file) =>
  <li key={file.id}>
    {file.fileName}
  </li>
  );

    render() {
        return (
          <div className="header">
            <h1 className="Download-section"> DOWNLOAD FILES </h1>
            <Panel>
              <p>Selected Files</p>
              <FileBox>
                <ul>{this.listItems}</ul>
              </FileBox>
            </Panel>
            <Panel>
                <p> Hi </p>
            </Panel>
          </div>
        );
    }
}

export default Download;