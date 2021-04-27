import Head from "next/head";
import React from "react";
import Router from "next/router";

import { listenerDb } from "../db/listenerDb";
import { memberDb } from "../db/memberDb";

import {
  setScenario,
  setStep,
  wipeState,
  addMessage,
  setBadUser,
} from "../helpers/writeToState";

const Home = (props) => {
  const handleClick = (variant) => {
    // wipe the state in case they've done it  before
    wipeState();

    // add the scenario and step to state
    setScenario(variant);
    setStep(0);

    // populate the initial messages
    for (const message of props.data[variant].initialMessages) {
      addMessage(message.content, message.author);
    }

    // populate the bad user's name
    setBadUser(props.data[variant].badUserName);

    Router.push(`/scenario/${variant}/step/0`);
  };
  return (
    <React.Fragment>
      <Head>
        <title>Responding to bad behavior</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="centered">Training Scenario</h1>
      <h2 className="centered">Responding to Bad Behavior</h2>
      <p className="centered">
        Sometimes you’ll encounter those who don’t follow the community
        guidelines and may cause harm to you and others. Learning how to best
        address these situations is an important part of keeping the community
        safe.
      </p>
      <p className="centered">
        See how you and others in the community would respond to a series of
        short simulated scenarios in one-on-one chats.
      </p>
      <h4 className="centered">To get started, what's your role on 7 Cups?</h4>
      <p className="centered">
        <button
          className="primary spaced-right"
          onClick={() => handleClick("member")}
        >
          Member
        </button>
        <button className="primary" onClick={() => handleClick("listener")}>
          Listener
        </button>
      </p>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const data = {
    listener: {
      badUserName: listenerDb.badUserName,
      initialMessages: listenerDb.initialMessages,
    },
    member: {
      badUserName: memberDb.badUserName,
      initialMessages: memberDb.initialMessages,
    },
  };

  return {
    props: { data },
  };
}

export default Home;
