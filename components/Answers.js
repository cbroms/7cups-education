import React, { useState } from "react";

import { getScenario } from "../helpers/readFromState";

import Message from "./Message";

import styles from "../styles/Answers.module.css";

const Answers = (props) => {
  const [selected, setSelected] = useState([]);

  const toggleSelected = (id) => {
    if (selected.includes(id)) {
      const newSelected = selected.filter((v) => {
        return v !== id;
      });
      setSelected(newSelected);
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <React.Fragment>
      <div className="prompt">
        Here are a few responses other {getScenario()}s suggested. Select all
        those you think would be appropriate.
      </div>
      <div className={styles.answersWrapper}>
        {props.responses.map((response) => {
          return (
            <div
              key={response.id}
              className={styles.answer}
              onClick={() => toggleSelected(response.id)}
            >
              <Message
                message={{ content: response.content, author: "me" }}
                fullWidth
              />
              <div
                className={`${styles.selected} ${
                  selected.includes(response.id) ? styles.filled : null
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Answers;
