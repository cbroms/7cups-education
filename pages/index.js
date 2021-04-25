import Head from "next/head";
import React from "react";
import Router from "next/router";

import {
  setScenario,
  setStep,
  wipeState,
  addMessage,
} from "../helpers/writeToState";

export default function Home() {
  const handleClick = (variant) => {
    // wipe the state in case they've done it  before
    wipeState();
    // add the scenario and step to state
    setScenario(variant);
    setStep(0);

    addMessage("hi there", "jim23332", true);
    addMessage("hello, this is a message", "me", true);
    Router.push(`/scenario/${variant}/step/0`);
  };
  return (
    <React.Fragment>
      <Head>
        <title>Responding to bad behavior</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello</h1>
      <h2>What is your primary role on 7 Cups? </h2>
      <button
        className="primary spaced-right"
        onClick={() => handleClick("member")}
      >
        Member
      </button>
      <button className="primary" onClick={() => handleClick("listener")}>
        Listener
      </button>
    </React.Fragment>
  );
}
