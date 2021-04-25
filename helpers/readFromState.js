import { get, set } from "./state";

// our state looks like this:
/* 
{
    chat: [],
    modelChat: [],
    scenario: "listener",
    step: 0,
}
*/

export const getMessages = (isUser = false) => {
  const chatKey = isUser ? "chat" : "modelChat";
  return get(chatKey, []);
};

export const getScenario = () => {
  return get("scenario", "");
};
