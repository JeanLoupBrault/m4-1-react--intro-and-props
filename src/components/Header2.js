import React from "react";

import "./Header.css";
import Avatar from './Avatar';

function Header(props) {

  return (
    <header>
      {props.participants
        .filter(participant => participant !== props.currentUser)
        .map(participant => (
          <div className="participant">
            <Avatar size={50} user={participant} />
            <div className="username">{participant.username}</div>
          </div>
        ))}

    </header>
  );
}

export default Header;
