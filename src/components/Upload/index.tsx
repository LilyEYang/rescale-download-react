import React from 'react'
import Button from "./../Button/index";
let window: any;

class Upload extends React.Component {
    render() {
        return (
        <div className="uploadButton">
            <button onClick={() => {
                    window.api.send('notify', 'Hello there');
                }}>
                    Notify
            </button>
             <button onClick={() => {
                    window.api.send('upload', '');
                }}>
                    Upload File
                </button>
        </div>
        );
    }
}

export default Upload;