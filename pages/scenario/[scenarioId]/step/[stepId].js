import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { getBadUser, getMessages } from "../../../../helpers/readFromState";
import { addMessage } from "../../../../helpers/writeToState";

import { memberDb } from "../../../../db/memberDb";
import { listenerDb } from "../../../../db/listenerDb";

import Chat from "../../../../components/Chat";
import Vote from "../../../../components/Vote";
import Entry from "../../../../components/Entry";
import Answers from "../../../../components/Answers";

import styles from "../../../../styles/Step.module.css";

const Step = (props) => {
  const router = useRouter();
  const { scenarioId, stepId } = router.query;

  const [messages, setMessages] = useState([]);
  const [userResponse, setUserResponse] = useState("");
  const [step, setStep] = useState(0);

  useEffect(() => {
    // add the bad user's response
    addMessage(props.data.badResponse, getBadUser(), true);
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
      // submit entry content (user's response)
      addMessage(userResponse, "me", true);
      // add the model response
      addMessage(props.data.cupsResponse, "7cups", true);
      // update the messages
      setMessages(getMessages(true));
      setStep(step + 1);
    } else if (step === 3) {
      // submit voting on answers
      // redirect to next page
      if (props.data.nextStep)
        router.push(`/scenario/${scenarioId}/step/${parseInt(stepId) + 1}`);
      else router.push(`/scenario/${scenarioId}/complete`);
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };

  let stepElement = <div>Loading...</div>;

  if (props.data && step < 2) {
    stepElement = (
      <Vote
        options={props.data.options}
        correctOption={props.data.correctOption}
        description={props.data.description}
        onVote={onVote}
        showResults={step === 1}
      />
    );
  } else if (props.data && step === 2) {
    stepElement = (
      <Entry
        onChange={(value) => {
          setUserResponse(value);
        }}
      />
    );
  } else if (props.data && step === 3) {
    stepElement = <Answers responses={props.data.otherResponses} />;
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
    </React.Fragment>
  );
};

export async function getStaticProps(context) {
  let data = null;
  if (context.params.scenarioId === "listener") {
    data = listenerDb.steps[context.params.stepId];
  } else if (context.params.scenarioId === "member") {
    data = memberDb.steps[context.params.stepId];
  }

  if (data === null || data === undefined) {
    return { notFound: true };
  }

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  let paths = [];

  for (let i = 0; i < listenerDb.steps.length; i++) {
    paths.push(`/scenario/listener/step/${i}`);
  }
  for (let i = 0; i < memberDb.steps.length; i++) {
    paths.push(`/scenario/member/step/${i}`);
  }

  return {
    paths,
    fallback: true,
  };
}

export default Step;
