import styles from "../styles/Answers.module.css";

import { useState } from "react";
import Message from "./Message";

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
  );
};

export default Answers;
