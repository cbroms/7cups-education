import React from "react";
import styles from "../styles/Entry.module.css";

const Entry = (props) => {
  return (
    <React.Fragment>
      <div className="prompt">How might you respond?</div>
      <textarea
        className={styles.input}
        placeholder="type your response..."
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      ></textarea>
    </React.Fragment>
  );
};

export default Entry;
