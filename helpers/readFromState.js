import { get, set } from "./state";

// our state looks like this:
/* 
{
    chat: [],
    modelChat: [],
    scenario: "listener",
    badUserName: "badguy123",
    step: 0,
}
*/

export const getMessages = () => {
  return get("chat", []);
};

export const getScenario = () => {
  return get("scenario", "");
};

export const getBadUser = () => {
  return get("badUserName", "badguy123");
};
