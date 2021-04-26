import React, { useState } from "react";

import { getScenario } from "../helpers/readFromState";

import styles from "../styles/Vote.module.css";

const Vote = (props) => {
  const [selected, setSelected] = useState([]);

  const onVote = (id) => {
    let newSelected = selected;
    if (selected.includes(id)) {
      newSelected = selected.filter((e) => e !== id);
    } else {
      newSelected = [...selected, id];
    }

    setSelected(newSelected);
    props.onSelectVote(newSelected);
  };
  return (
    <React.Fragment>
      {props.showResults && <div className="prompt">{props.description}</div>}
      {!props.showResults && (
        <div className="prompt">What would you do next?</div>
      )}
      <div className={styles.voteWrapper}>
        {props.options.map((option) => {
          return (
            <div className={styles.vote} key={option.id}>
              <button
                style={
                  props.showResults
                    ? {
                        backgroundImage: `linear-gradient(to right, var(--medium-blue) ${
                          option.selected * 100
                        }%, var(--light-blue) ${option.selected * 100}%)`,
                      }
                    : null
                }
                className={`${styles.voteButton} ${
                  selected.includes(option.id) ? styles.selected : null
                }`}
                onClick={() => {
                  onVote(option.id);
                }}
                disabled={props.showResults}
              >
                {option.content}
              </button>
              {props.showResults && (
                <div className={styles.resultsText}>
                  Selected by {option.selected * 100}% of {getScenario()}s
                </div>
              )}
              {props.showResults &&
                (option.id === props.correctOption ||
                  props.correctOptions?.includes(option.id)) && (
                  <div className={styles.recommendedText}>
                    Recommended option
                  </div>
                )}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Vote;
