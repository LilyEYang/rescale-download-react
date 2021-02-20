import React from "react";
import { icons } from "react-icons";

import { Panel, FileBox, FileList, SizeList, FileButton, Para1, Para2 } from "./styles";
import { BsTrash } from "react-icons/bs";

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

  listFile = this.fileList.map((file) =>
  <li key={file.id}>
    <FileButton><BsTrash/></FileButton>
    <FileList>{file.fileName}</FileList>
    <SizeList>{file.size}</SizeList>
  </li>
  );

    render() {
        return (
          <div>
            <h1> DOWNLOAD FILES </h1>
            <Panel>
              <p>Selected Files</p>
              <FileBox>
                <p> Micah</p>
                <Para1>Name</Para1>
                <Para2>Size</Para2>
                <ul>{this.listFile}</ul>
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