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
      {props.showScore ? (
        <div className="prompt">Here's some feedback on these responses.</div>
      ) : (
        <div className="prompt">
          Here are a few responses other {getScenario()}s suggested. Select all
          those you think would be appropriate.
        </div>
      )}
      <div className={styles.answersWrapper}>
        {props.responses.map((response) => {
          return (
            <React.Fragment key={response.id}>
              <div
                className={styles.answer}
                onClick={() =>
                  !props.showScore ? toggleSelected(response.id) : null
                }
              >
                <div className={styles.answerRow}>
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

                {props.showScore ? (
                  <div
                    className={`${styles.answerFeedback} ${
                      response.rating === 0
                        ? styles.neutral
                        : response.rating === -1
                        ? styles.bad
                        : styles.good
                    }`}
                  >
                    {response.feedback}
                  </div>
                ) : null}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Answers;
