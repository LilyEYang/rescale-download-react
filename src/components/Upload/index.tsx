import React from 'react'
import Button from "./../Button/index";
declare var window: any;

class Upload extends React.Component {
    render() {
        return (
        <div className="uploadButton">
            <p>Hello</p>
            <button onClick={() => {
                    window.api.send('upload', '');
                }}>
                Upload
            </button>
        </div>
        );
    }
}

export default Upload;