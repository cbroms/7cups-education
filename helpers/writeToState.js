import { get, set } from "./state";
import { v4 as uuidv4 } from "uuid";

// our state looks like this:
/* 
{
    chat: [],
    modelChat: [],
    scenario: 0,
    step: 0,
}
*/

export const addMessage = (message, author, isUser = false) => {
  const chatKey = isUser ? "chat" : "modelChat";
  const messageObj = {
    content: message,
    author,
    id: uuidv4(),
    timestamp: new Date(),
  };
  const prevChat = get(chatKey, []);
  set(chatKey, [...prevChat, messageObj]);
};

export const setScenario = (scenario) => {
  set("scenario", scenario);
};

export const setStep = (step) => {
  set("step", step);
};

export const wipeState = () => {
  set("chat", []);
  set("modelChat", []);
  set("scenario", null);
  set("step", []);
};
