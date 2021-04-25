import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { getMessages } from "../../../../helpers/readFromState";
import { addMessage } from "../../../../helpers/writeToState";

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
  const [userResponse, setUserResponse] = useState("");
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
      description:
        "At this point it would probably be best to inquire more about their situation.", // little explanation of the correct answer
      otherResponses: [
        { id: 514632, content: "How are you today?" },
        { id: 514623, content: "How are you today?" },
        {
          id: 514233,
          content: "Hello, there how are you? I am jim. How are you today?",
        },
        { id: 512362, content: "How are you today?" },
        { id: 514644, content: "How are you today?" },
        { id: 490862, content: "How are you today?" },
      ], // ~5 random other user’s responses
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
      addMessage(userResponse, "me", true);
      setMessages(getMessages(true));
      setStep(step + 1);
    } else if (step === 3) {
      // submit voting on answers
      // redirect to next page
      router.push(`/scenario/${scenarioId}/step/${parseInt(stepId) + 1}`);
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };

  let stepElement = <div>Loading...</div>;

  if (data && step < 2) {
    stepElement = (
      <Vote
        options={data.options}
        correctOption={data.correctOption}
        description={data.description}
        onVote={onVote}
        showResults={step === 1}
      />
    );
  } else if (data && step === 2) {
    stepElement = (
      <Entry
        onChange={(value) => {
          setUserResponse(value);
        }}
      />
    );
  } else if (data && step === 3) {
    stepElement = <Answers responses={data.otherResponses} />;
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
