import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { getMessages } from "../../../../helpers/readFromState";

import Chat from "../../../../components/Chat";
import Vote from "../../../../components/Vote";
import Entry from "../../../../components/Entry";
import Answers from "../../../../components/Answers";

import styles from "../../../../styles/Step.module.css";

const Step = () => {
  const router = useRouter();
  const { scenarioId, stepId } = router.query;

  const [data, setData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // fetch from the api here
    setData({
      options: [
        {
          id: 235623,
          content: "Inquire about their situation",
          selected: 0.87,
        },
        { id: 261262, content: "Suggest some options", selected: 0.03 },
        { id: 261261, content: "Something else", selected: 0.1 },
      ],
      correctOption: 235623, // id of options array
      description: "What should you do next?", // little explanation of the correct answer
      otherResponses: [{ id: 51462, content: "How are you today?" }], // ~5 random other user’s responses
      nextStep: true, // true if there’s another step after this one, false otherwise
    });

    setMessages(getMessages(true));
    return () => {
      // cleanup
    };
  }, []);

  const onVote = () => {
    // submit vote
    setStep(step + 1);
  };

  const handleContinue = () => {
    if (step === 2) {
      // submit entry content
    } else if (step === 3) {
      // submit voting on answers
      // redirect to next page
      router.push(`/scenario/${scenarioId}/step/${parseInt(stepId) + 1}`);
    }
    setStep(step + 1);
  };

  let stepElement = <div>Loading...</div>;

  if (data && step < 2) {
    stepElement = (
      <Vote
        options={data.options}
        correctOption={data.correctOption}
        onVote={onVote}
        showResults={step === 1}
      />
    );
  } else if (data && step === 2) {
    stepElement = <Entry />;
  } else if (data && step === 3) {
    stepElement = <Answers />;
  }

  return (
    <React.Fragment>
      <Chat chat={messages}></Chat>
      {stepElement}
      {step > 0 && (
        <div className={styles.continueWrapper}>
          <button className="primary" onClick={handleContinue}>
            Continue
          </button>
        </div>
      )}

      {/* {data?.nextStep && step === 3 && (
        <Link href={`/scenario/${scenarioId}/step/${parseInt(stepId) + 1}`}>
          <a>Continue</a>
        </Link>
      )} */}
    </React.Fragment>
  );
};

export default Step;
