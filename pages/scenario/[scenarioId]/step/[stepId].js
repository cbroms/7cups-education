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
import Example from "../../../../components/Example";

import styles from "../../../../styles/Step.module.css";

const Step = (props) => {
  const router = useRouter();
  const { scenarioId, stepId } = router.query;

  const [messages, setMessages] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [userResponse, setUserResponse] = useState("");
  const [step, setStep] = useState(0);
  const [endStep, setEndStep] = useState(4);

  useEffect(() => {
    if (props.data.otherResponses.length === 0) {
      // if there are no free response options, end the scenario before that step
      setEndStep(1);
    } else {
      setEndStep(4);
    }
    // add the bad user's response
    addMessage(props.data.badResponse, getBadUser(), true);
    setMessages(getMessages(true));

    return () => {
      // cleanup
    };
  }, [props.data.badResponse]);

  const onSelectVote = (selected) => {
    setSelectedOptions(selected);

    if (props.data.correctOption) {
      // if it's a single select, move on when an option is chosen
      setStep(step + 1);
    }
  };

  const handleContinue = () => {
    if (step === endStep) {
      if (props.data.nextStep) {
        router.push(`/scenario/${scenarioId}/step/${parseInt(stepId) + 1}`);
        setStep(0);
      } else router.push(`/scenario/${scenarioId}/complete`);
    } else if (step === 2) {
      // add the response
      if (userResponse !== "") {
        // submit entry content (user's response)
        addMessage(userResponse, "me", true);
      }
      // add the model response
      addMessage(props.data.cupsResponse, "7cups", true);
      // update the messages
      setMessages(getMessages(true));
      setStep(step + 1);
    } else if (step === 4) {
      // TODO: submit voting on answers
    } else {
      setStep(step + 1);
    }
  };

  let stepElement = <div>Loading...</div>;

  if (props.data && step < 2) {
    stepElement = (
      <Vote
        options={props.data.options}
        correctOptions={props.data.correctOptions}
        correctOption={props.data.correctOption}
        description={props.data.description}
        onSelectVote={onSelectVote}
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
  } else if (props.data && step === 4) {
    // the last message is the 7cups model message
    stepElement = (
      <Example
        description={props.data.cupsResponseDescription}
        message={messages[messages.length - 1]}
      ></Example>
    );
  }

  return (
    <React.Fragment>
      <Chat chat={messages}></Chat>
      {stepElement}
      {(step > 0 ||
        (props.data.correctOptions && selectedOptions.length > 0)) && (
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
