import React, { useEffect, useRef } from "react";

import styles from "../styles/Chat.module.css";

import Message from "./Message";

const Chat = (props) => {
  const elt = useRef(null);
  useEffect(() => {
    if (elt && props.scollDown) {
      elt.current.scrollTop = elt.current.scrollHeight;
    }
  }, [props.chat]);
  return (
    <div
      className={styles.chat}
      style={{ height: `${props.height}vh` }}
      ref={elt}
    >
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
