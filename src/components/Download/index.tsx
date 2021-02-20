import React from "react";
import { icons } from "react-icons";

import { Panel, FileBox, FileList, SizeList } from "./styles";
import { BsTrash } from react-icons/bs;

class Download extends React.Component {
  fileList = [
    {
      id: 1,
      fileName: "file1.txt",
      size: "259.43 KB"
    },
    {
      id: 2,
      fileName: "data1.txt",
      size: "147.28 KB"
    },
    {
      id: 3,
      fileName: "file2.txt",
      size: "2.3 MB"
    }];

  listFileName = this.fileList.map((file) =>
  <li key={file.id}>
    {file.fileName}
  </li>
  );

  listSize = this.fileList.map((file) =>
  <li key={file.id}>
    {file.size}
  </li>
  );





    render() {
        return (
          <div>
            <h1> DOWNLOAD FILES </h1>
            <Panel>
              <p>Selected Files</p>
              <FileBox>
                <FileList>{this.listFileName}</FileList>
                <SizeList>{this.listSize}</SizeList>
                <button>

                </button>
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