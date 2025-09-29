import React, { Component } from 'react'

class  Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="text-end">
                    <a className="btn btn-social-icon btn-github" href="https://github.com/untari"><i data-toggle="tooltip" data-placement="top" title="Github" className="fa fa-github  fa-3x"></i></a>
                    <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/untari"><i data-toggle="tooltip" data-placement="top" title="LinkedIn" className="fa fa-linkedin  fa-3x"></i></a>
                    <a className="btn btn-social-icon" href="mailto:"><i data-toggle="tooltip" data-placement="top" title="Email" className="fa fa-envelope-o  fa-3x"></i></a>
                </div>
            </div>
        );
   }
}
export default Footer;
