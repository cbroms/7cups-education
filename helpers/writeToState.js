import { get, set } from "./state";
import { v4 as uuidv4 } from "uuid";

// our state looks like this:
/* 
{
    chat: [],
    scenario: "listener",
    badUserName: "badguy123",
    step: 0,
}
*/

export const addMessage = (message, author) => {
  const messageObj = {
    content: message,
    author,
    id: uuidv4(),
    timestamp: new Date(),
  };
  const prevChat = get("chat", []);
  set("chat", [...prevChat, messageObj]);
};

export const setScenario = (scenario) => {
  set("scenario", scenario);
};

export const setStep = (step) => {
  set("step", step);
};

export const setBadUser = (user) => {
  set("badUserName", user);
};

export const wipeState = () => {
  set("chat", []);
  set("modelChat", []);
  set("scenario", null);
  set("step", []);
};
