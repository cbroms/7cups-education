import React from "react";

import Message from "./Message";

import styles from "../styles/Example.module.css";

const Example = (props) => {
  return (
    <React.Fragment>
      <div className="prompt">
        Here's an example response from our team at 7 Cups. Remember, there's
        always more than one right way to respond.
      </div>
      <Message left message={props.message}></Message>
      <p className={styles.exampleDescription}>{props.description}</p>
    </React.Fragment>
  );
};

export default Example;
