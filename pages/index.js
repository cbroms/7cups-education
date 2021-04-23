import Head from "next/head";
import React from "react";
import Router from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const handleClick = (variant) => {
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
      <button className="primary spaced-right" onClick={() => handleClick(1)}>
        Member
      </button>
      <button className="primary" onClick={() => handleClick(0)}>
        Listener
      </button>
    </React.Fragment>
  );
}
