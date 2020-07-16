import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'reactstrap';



function Certification() {
    return(
      <div>
       <div className="text-center">
         <Link to="Certs" ><img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38745/preview.svg" alt="udacity"  height="50" className="fixed-center" /></Link>
       </div>

       <div className="text-right">
          <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38764/preview.svg" alt="LinkedIn"   height="50" className="fixed-right"/>
       </div>
       <div className="text-left">
          <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38849/preview.svg" alt="Coursera"  height="60" className="fixed-left"/>
       </div>
      </div>
    );
  }
export default Certification;