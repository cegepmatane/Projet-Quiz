import React from 'react';

import logo_chat from '../icons/logo_chat.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={logo_chat} alt="online icon" />
      <h3>{room}</h3>
    </div>
    
  </div>
);

export default InfoBar;