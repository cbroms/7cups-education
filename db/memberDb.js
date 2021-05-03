export const memberDb = {
  badUserName: "sunset1242",
  initialMessages: [
    {
      author: "sunset1242",
      content: "Hello, I’m a Listener at 7 Cups. What’s on your mind?",
    },
    {
      author: "me",
      content:
        "I’ve got a lot on my mind. I’ve been feeling pretty lonely and feel like I don’t have many friends.",
    },
  ], // the initial state of the chat, if we want to pre-populate it with messages
  steps: [
    // STEP 1
    {
      badResponse:
        "That’s interesting .. it must be hard being a loser with no friends..  you should go out and get a life and maybe a girlfriend/boyfriend or something.", // the bad listener's response
      options: [
        {
          id: 235623,
          content: "Ignore the listener and continue",
          selected: 0.12,
        },
        {
          id: 261262,
          content: "Respond rudely to the listener",
          selected: 0.03,
        },
        { id: 261261, content: "Flag the message", selected: 0.85 },
      ],
      correctOption: 261261, // id of options array
      description:
        "We recommend immediately flagging any messages that think could be harmful to you or other members.", // little explanation of the correct answer
      otherResponses: [
        { id: 514632, content: "You’re so rude lol." },
        {
          id: 514623,
          content:
            "The way you’re responding isn’t very helpful and doesn’t make me feel supported.",
        },
        {
          id: 514233,
          content:
            "I don’t feel like you are using active listening to help me in this situation.",
        },
        {
          id: 512362,
          content:
            "As a member of 7 Cups, I don’t feel very supported by you right now.",
        },
      ], // ~6 random other user’s responses
      cupsResponse:
        "Your language doesn’t feel very supportive to me. I don’t feel heard and I’m seeking emotional support right now.", // the model response from 7 cups
      cupsResponseDescription:
        "As a member of 7 Cups, you deserve to feel respected and treated appropriately. Listeners are trained in active listening and should help you feel better and never worse. If you come across this type of chat, remind the listener of how you’re feeling. If after speaking up, they refuse and continue inappropriate behavior, let them know that you are going to have to end the chat or report them.",
      nextStep: true, // true if there’s another step after this one, false otherwise
    },

    // STEP 2
    // Need support for not showing the chat bubble if there's no badResponse + somehow selected box styling appears on the next step as well
    // + Instead of what would you do next? we need a text  "What guidelines did this listener break? Select all that apply."
    {
      badResponse: "",
      options: [
        {
          id: 235623,
          content: "Remain professional, kind, and respectful",
          selected: 0.78,
        },
        { id: 261262, content: "Don’t give advice", selected: 0.73,},
        { id: 261261, content: "Never create multiple accounts", selected: 0.21,},
      ],
      correctOptions: [235623, 261262], // id of options array
      description:
        "Remember to always stay respectful while not crossing the boundary of giving advice", // little explanation of the correct answer
      otherResponses: [], // ~6 random other user’s responses
      cupsResponse: "", // the model response from 7 cups
      cupsResponseDescription: "",
      nextStep: true, // true if there’s another step after this one, false otherwise
    },

    // STEP 3
    {
      badResponse:
        "Well it sounds like you’re being really sensitive!!! I’m just trying to help.  Why don’t I take you out to dinner to help you feel a little less lonely. Heres my snapchat: http://www.snapchat.com/listener101", // the bad user's response
      options: [
        {
          id: 235623,
          content: "Agree to dinner",
          selected: 0.17,
        },
        { id: 261262, content: "Report the listener", selected: 0.73 },
        { id: 261261, content: "Something else", selected: 0.1 },
      ],
      correctOption: 261262, // id of options array
      description:
        "If a listener continues to break community guidelines or makes you feel uncomfortable, you have the right to end the chat or report the listener. Reporting can help prevent further inappropriate behavior from occuring.", // little explanation of the correct answer
      otherResponses: [], // ~6 random other user’s responses
      cupsResponse: "", // the model response from 7 cups
      cupsResponseDescription: "",
      nextStep: true, // true if there’s another step after this one, false otherwise
    },

    // STEP 4
    {
      badResponse: "",
      options: [
        {
          id: 235623,
          content: "Engaging in flirting or sexting", selected: 0.91
        },
        { id: 261262, content: "Sharing links to personal information", selected: 0.89 },
        { id: 261261, content: "Maintaining a confidential atmosphere", selected: 0.90 },
      ],
      correctOptions: [235623, 261262, 261261], // id of options array
      description: "",
      otherResponses: [], // ~6 random other user’s responses
      cupsResponse: "", // the model response from 7 cups
      cupsResponseDescription: "",
      nextStep: false, // true if there’s another step after this one, false otherwise
    },
  ],
};
