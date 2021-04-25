import React from "react";

import styles from "../styles/Chat.module.css";

import Message from "./Message";

const Chat = (props) => {
  return (
    <div className={styles.chat}>
      {props.chat.map((message) => {
        return (
          <React.Fragment key={message.id}>
            {(message.author !== "7cups" || props.show7Cups) && (
              <Message message={message} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Chat;
