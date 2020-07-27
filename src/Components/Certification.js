import React  from 'react';
import { Button } from 'reactstrap';

const Certification = (props) => {
   return (
        <div id="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       Front-End Web Developer with React
                    </button>
                </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       Introduction Programming Languages
                    </button>
                </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                         Front-End Web Developer Learning Path
                    </button>
                </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                </div>
                </div>
            </div>
        </div>
  );
}
export default Certification;
