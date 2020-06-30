import React, { PureComponent } from 'react';
import pdf from './screen.png';
import jsPDF from 'jspdf';

class Resume extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    jsPdGenerator = () => {
         var doc = new jsPDF('p', 'pt', 'letter');
         doc.setFontSize(40)
         doc.text(35, 25, 'resume')
         doc.save("Resume.pdf");
    }
    render() {
        return(
            <div>
                <div>
                   <button onClick={this.jsPdGenerator}  className="button">D</button>
                </div>
                <img src={pdf} alt="resume" height="400" widht="400" />
            </div>
        );
    }
}
export default Resume;
