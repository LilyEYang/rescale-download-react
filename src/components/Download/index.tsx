import React from "react";
import { icons } from "react-icons"

import { Panel, Section, Header, FileBox, FileList, SizeList, FileButton, DownloadButton, FileTree, Image } from "./styles";
import { BsTrash, BsFolder } from "react-icons/bs";
import Button from "./../Button/index";

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
    <FileButton><BsTrash className="trashButton"/></FileButton>
    <FileList>{file.fileName}</FileList>
    <SizeList>{file.size}</SizeList>
  </li>
  );

    render() {
        return (
          <div>
            <Header>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/3/39/Rescale%2C_Inc._logo.png" alt="rescale"/><p>RESCALE TRANFER MANAGER</p>
            </Header>
            <Section>
              <h1 className="download-title"> DOWNLOAD FILES FROM RESCALE </h1>
              <div className="panels">
                <Panel>
                  <p className="panelTitle">Rescale</p>
                  <p className="panelSubheading" >Selected Files</p>
                  <FileBox>
                    <p className="para1">Name</p>
                    <p>Size</p>
                    <ul>{this.listFile}</ul>
                  </FileBox>
                  <div className="buttonLeftPanel">
                      <DownloadButton>DOWNLOAD</DownloadButton>
                  </div>

                  <FileTree>
                    <ul>
                    <li><i className= "folder"><BsFolder className="folderIcon"/></i>Root</li>
                        <ul>
                          <li><BsFolder className="subfolderIcon"/>dp0</li>
                          <li><BsFolder className="subfolderIcon"/>import_files</li>
                          <li><BsFolder className="subfolderIcon"/>session_files</li>
                        </ul>
                    </ul>
                  </FileTree>
                  
































                </Panel>
                <Panel>
                  <p className="panelTitle"> LOCAL </p>
                    <p className="panelSubheading"> SELECTED DOWNLOAD DESTINATION </p>
                    <p className="downloadDest"> Users/Downloads/Rescale </p>
                    <div className="buttonRightPanel">
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