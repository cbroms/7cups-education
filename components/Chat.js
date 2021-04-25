import styles from "../styles/Chat.module.css";

import Message from "./Message";

const Chat = (props) => {
  return (
    <div className={styles.chat}>
      {props.chat.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
    </div>
  );
};

export default Chat;
