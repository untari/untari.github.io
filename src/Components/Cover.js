import React, { Component } from 'react';
import Bulb1 from './bulb1.svg';

function makeOn(e) {
  e.target.setAttribute( 'src', 'https://image.flaticon.com/icons/svg/3073/3073363.svg');
  e.target.setAttribute('alt', 'on');
}

class Cover extends Component {
  render() {
    return(
      <div>
         <img src={Bulb1} className="click" alt="bulb" onClick={makeOn} />
      </div>
    );
  }
}
export default Cover;
