import React from 'react';
import { Link } from "react-router-dom";
import resume from './Resume.pdf';
import { Button } from 'reactstrap';
import FileSaver from 'file-saver';
import PdfImg from './screen.svg'; 


class Resume extends React.Component {
	render() {
        return(
            
               <div className="container">
                    <h5>Click the Download button for my resume!</h5>
                    <Button color="info" id="btnDownload" ><a href={require("./Resume.pdf")} download={resume}>Download File</a></Button>
                </div>
         
        );
   }
}

export default Resume;
