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
          <div className="container">
              <div className="row">
                 <div>
                   <button onClick={this.jsPdGenerator}  className="button">D</button>
                 </div>
                 <div>
                    <p>click D button for download the resume</p>
                </div>
              </div>
          </div>
        );
    }
}
export default Resume;
