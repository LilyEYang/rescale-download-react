import styled from 'styled-components' 


export const Panel = styled.div`
    height: 60vh;
    width: 35vw;
    flex: 1 1 0;
    padding: 30px;
    margin: 30px;

    background: #FFFFFF;
    border: 1px solid #939393;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;


    .panelTitle {
        font-family: Quicksand, sans-serif
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.03em;

        color: #717171;
        border-bottom: 2px solid #D1D1D1;
        margin-bottom: 20px;
        padding-bottom: 10px;
    }

    .panelSubheading {
        font-family: Open Sans, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;

        color: #A3A3A3;
        margin-bottom: 5px;
    }

    .downloadDest {
        font-family: Open Sans, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;

        color: #717171;
        margin-bottom: 90px;
    }

    .buttonRightPanel {
        text-align: center;
    }

    .buttonLeftPanel {
        text-align: right;
        right: 30px;
        position: relative;
        bottom: -130px;

        color:#4CAF50;   
    }

`;

export const DownloadButton = styled.button`
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;

    color: #FFFFFF;

    background: #0088cc;
    border-radius: 10px;
    padding: 10px;
`;


export const FileBox = styled.div`
    li {
        list-style-type: none;
    }

    position: relative;
    top: 20px;
    width: 30vw;
    height: 20vh;
    border: 0.5px solid grey;
    padding: 20px;

    p {
        font-family: Open Sans, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: #717171;

        border-bottom: 2px solid #D1D1D1;
        margin-bottom: 15px;
        padding-bottom: 5px;
    }

    .para1 {
        float: left;
        width: 10vw;
    }
    
`;

export const FileList = styled.li`
    width: 10vw;
    float: left;
    padding-bottom: 1em;

    color: #006699;
    
`;

export const SizeList = styled.li`
    width: 50%;
    position: relative;
    align: center;
    padding-bottom: 1em;
    
`;

export const FileButton = styled.button`
    position: relative;
    float: right;
    right: 60px;
    
    .trashButton {
        width: 20px;
        height: 20px;
        padding: 0;
        outline: none;
        border: none;
        background: white;
        

    }
`;

export const Section = styled.div`
    margin: 80px 100px 0 100px;

    .panels {
        display: flex;
    }

    .download-title {
        font-family: Quicksand, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 60px;

        color: #000000;
        margin-left: 25px;
    }
`

export const Header = styled.div`
    background: linear-gradient(90deg, #0F1336 0%, #1F5671 100%);

    p {
        font-family: Quicksand, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 60px;

        color: #FFFFFF;
        text-align: center;
        position: relative;
        right: 100px;
        padding: 20px;
    }
`

export const Image = styled.img`
    width: 250px;
    position: relative;
    top: 20px;
    float: left;
`

export const FileTree = styled.div`
    position: relative;
    padding: 10px;
    right: -20px;
    font-family: 'Roboto Mono', monospace;
    font-size: .90rem;
    font-weight: 600;
    line-height: 1.5;
    color: #212529;

    .folder{
        color: #007bff;
    }

    ul {
        padding-left: 10px;
        list-style: none;
    }

    li {
      position: relative;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 10px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      
      &:before {
        position: absolute;
        top: 15px;
        left: 0;
        width: 10px;
        height: 2px;
        margin: auto;
        content: '';
        background-color: #666;
      }
      
      &:after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 3px;
        height: 100%;
        content: '';
        background-color: #666;
      }
      
      &:last-child:after {
        height: 15px;
      }
    }

    .folderIcon {
        width: 50px;
        height: 30px;
    }

    .subfolderIcon {
        width: 40px;
        height: 20px;
    }
`;


