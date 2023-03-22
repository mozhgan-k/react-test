import React from "react";

const MailBox = (props) => {
  return (
    <div>
      {
        props.messages.length > 0 && 
        <h2>
          You have {props.messages.length} unread message
        </h2>
      }
    </div>
  )
}

export default MailBox