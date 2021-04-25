import styles from "../styles/Entry.module.css";

const Entry = (props) => {
  return (
    <div>
      <textarea
        className={styles.input}
        placeholder="type your response..."
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default Entry;
