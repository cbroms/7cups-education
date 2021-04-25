import React from "react";
import styles from "../styles/Vote.module.css";

const Vote = (props) => {
  return (
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
              className={styles.voteButton}
              onClick={() => {
                props.onVote(option.id);
              }}
            >
              {option.content}
            </button>
            {props.showResults && (
              <div className={styles.resultsText}>
                Selected by {option.selected * 100}% of Listeners
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Vote;
