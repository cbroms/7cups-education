import React, { useEffect, useState } from "react";

import { getMessages, getScenario } from "../../../helpers/readFromState";

import Chat from "../../../components/Chat";

const Complete = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("listener");

  useEffect(() => {
    setMessages(getMessages());
    setUser(getScenario() === "member" ? "listener" : "member");
  }, []);
  return (
    <React.Fragment>
      <h1>Scenario Complete</h1>
      <p>
        By staying respectful, referencing your community guidelines, and
        letting a {user} know when their behavior is inappropriate, you can stay
        in control when difficult situations arise. If it comes to it,
        submitting a detailed report can help ensure that those who routinely
        behave badly are removed from the community.{" "}
      </p>
      <h3>Here's how your chat went</h3>
      <Chat show7Cups chat={messages}></Chat>
    </React.Fragment>
  );
};

export default Complete;
