import styles from "../styles/Message.module.css";

const Message = (props) => {
  const date = new Date(props.message.timestamp);
  const hour = date.getHours() % 12;
  const ampm = date.getHours() > 12 ? "PM" : "AM";
  const minute = date.getMinutes();

  return (
    <div className={styles.messageLine}>
      <div
        className={`${styles.messageWrapper} ${
          (props.message.author === "me" || props.message.author === "7cups") &&
          styles.right
        }`}
      >
        <span
          className={`${styles.message} ${
            props.message.author === "me" && styles.self
          } ${props.message.author === "7cups" && styles.sevenCups} ${
            props.fullWidth ? styles.fullWidth : null
          }`}
        >
          {props.message.content}
        </span>
      </div>
      {props.message.timestamp && (
        <div
          className={`${styles.messageWrapper} ${
            (props.message.author === "me" ||
              props.message.author === "7cups") &&
            styles.right
          }`}
        >
          <span className={styles.messageAuthor}>
            {props.message.author === "7cups" && "7 Cups model response"}
            {props.message.author === "me" && "Your message"}
          </span>
          <span className={styles.messageTime}>
            {hour}:{minute} {ampm}
          </span>
        </div>
      )}
    </div>
  );
};

export default Message;
