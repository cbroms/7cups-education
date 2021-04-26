export const listenerDb = {
  badUserName: "sunset1242",
  initialMessages: [
    {
      author: "me",
      content: "Hi, welcome to 7Cups!",
    },
  ], // the initial state of the chat, if we want to pre-populate it with messages
  steps: [
    // STEP 1
    {
      badResponse: "I’m lonely, what should I do?", // the bad user's response
      options: [
        {
          id: 235623,
          content: "Inquire about their situation",
          selected: 0.87,
        },
        { id: 261262, content: "Suggest some options", selected: 0.03 },
        { id: 261261, content: "Something else", selected: 0.1 },
      ],
      correctOption: 235623, // id of options array
      description:
        "At this point it would probably be best to inquire more about their situation. Note that majority selection by Listeners does not always match the recommended option.", // little explanation of the correct answer
      otherResponses: [
        { id: 514632, content: "What’s on your mind?" },
        { id: 514623, content: "That’s interesting... tell me more!" },
        {
          id: 514233,
          content: "How can I help?",
        },
        { id: 512362, content: "I’m sorry, I feel that way sometimes too. Do you want to talk about it? I’m here to help." },
        { id: 514644, content: "Feeling lonely is a normal thing! Is there anything in particular that is going on?" },
      ], // ~6 random other user’s responses
      cupsResponse: "I’m sorry that you’re feeling lonely. Do you want to talk more about it?", // the model response from 7 cups
      cupsResponseDescription:
        "When a member comes to 7 Cups seeking support, we want to make sure they feel heard by using Active Listening. We can respectfully inquire more about their situation and make them feel heard.",
      nextStep: true, // true if there’s another step after this one, false otherwise
    },

    // STEP 2
    {
      badResponse: "What do you care ******* i need help", // the bad user's response
      options: [
        {
          id: 235623,
          content: "Ask again politely",
          selected: 0.4,
        },
        { id: 261262, content: "Flag their message", selected: 0.43 },
        { id: 261261, content: "Something else", selected: 0.12 },
      ],
      correctOption: 261262, // id of options array
      description:
        "We recommend immediately flagging any messages that think could be harmful to you or other listeners.", // little explanation of the correct answer
      otherResponses: [], // ~6 random other user’s responses
      cupsResponse: "", // the model response from 7 cups
      cupsResponseDescription:
        "",
      nextStep: true, // true if there’s another step after this one, false otherwise
    },

    // STEP 3 FLAGGING

    // STEP 4 
    {
      badResponse: "", // the bad user's response
      options: [
        {
          id: 235623,
          content: "Give them a polite warning",
          selected: 0.75,
        },
        { id: 261262, content: "Ask more about their situation", selected: 0.24 },
        { id: 261261, content: "Something else", selected: 0.01 },
      ],
      correctOption: 235623, // id of options array
      description:
        "After flagging, be sure to give them a verbal reminder that they should be respectful and polite in chats. Make sure they’re aware what behavior is acceptable on 7 Cups.", // little explanation of the correct answer
      otherResponses: [
        { id: 514632, content: "I’m here to help you, but the spaces here must be treated with mutual respect." },
        { id: 514623, content: "Please don’t use that language. I’m here to help you." },
        {
          id: 514233,
          content: "That’s not appropriate.",
        },
        { id: 512362, content: "Please refer to the 7 Cups guidelines." },
        { id: 514644, content: "I know that what you’re going through must be tough, but there’s no need to use that language here on 7 Cups." },
      ], // ~6 random other user’s responses
      cupsResponse: "You must be going through a lot right now. I’m here to help, but please abide by Community guidelines and don’t use that kind of language.", // the model response from 7 cups
      cupsResponseDescription:
        "Remember you are volunteering your time and you deserve to feel respected and be treated appropriately. If you come across this type of chat, remind the member of the purpose of the site and politely ask them to stop, if after asking them to stop they refuse, please let them know that you are going to have to end the chat or report them.",
      nextStep: true, // true if there’s another step after this one, false otherwise
    },

    // STEP 5 GUIDELINE ICON

    // STEP 6
    {
      badResponse: "yeah but you’re not helping me", // the bad user's response
      options: [
        {
          id: 235623,
          content: "Explain how listeners can help with active listening",
          selected: 0.75,
        },
        { id: 261262, content: "Ask more about their situation", selected: 0.24 },
        { id: 261261, content: "Something else", selected: 0.01 },
      ],
      correctOption: 235623, // id of options array
      description:
        "Make sure members are aware that listeners are trained in active listening and don’t give advice.", // little explanation of the correct answer
      otherResponses: [
        { id: 514632, content: "I’m sorry you feel that I’m not being helpful. We can talk more about how you’re feeling." },
        { id: 514623, content: "Please don’t use that language. I’m here to help you." },
        {
          id: 514233,
          content: "I am helping you.",
        },
        { id: 512362, content: "I’m trying to help you lol." },
        { id: 514644, content: "Listeners can offer support through active listening. I’d be happy to talk with you and help you." },
      ], // ~6 random other user’s responses
      cupsResponse: "I’m sorry you feel that way. As a listener, we can use emotional active listening to support you. We can discuss more about how you’re feeling.", // the model response from 7 cups
      cupsResponseDescription:
        "Remind members of how listeners can provide support and help them in whatever they are going through, as long as it abides by Community Guidelines.",
      nextStep: true, // true if there’s another step after this one, false otherwise
    },

    // STEP 7
    {
      badResponse: "**** useless your a waste of time. call me at *********** i dare you", // the bad user's response
      options: [
        {
          id: 235623,
          content: "Report them",
          selected: 0.5,
        },
        { id: 261262, content: "Flag their messages", selected: 0.31 },
        { id: 261261, content: "Something else", selected: 0.19 },
      ],
      correctOption: 261262, // id of options array
      description:
        "Make sure you flag any offending messages before you take any sort of action.", // little explanation of the correct answer
      otherResponses: [], // ~6 random other user’s responses
      cupsResponse: "", // the model response from 7 cups
      cupsResponseDescription:
        "",
      nextStep: true, // true if there’s another step after this one, false otherwise
    },

    // STEP 8 FLAG

    // STEP 9
    {
      badResponse: "", // the bad user's response
      options: [
        {
          id: 235623,
          content: "Report them",
          selected: 0.6,
        },
        { id: 261262, content: "Leave the chat", selected: 0.21 },
        { id: 261261, content: "Something else", selected: 0.19 },
      ],
      correctOption: 235623, // id of options array
      description:
        "Reporting members that continue to violate the guidelines helps ensure that they cannot continue to be abusive to others on 7 Cups.", // little explanation of the correct answer
      otherResponses: [
        { id: 514632, content: "**** why would I have to put up with someone like you" },
        { id: 514623, content: "Reported." },
        {
          id: 514233,
          content: "There's nothing I can do",
        },
        { id: 512362, content: "You repeatedly broke our guideline. I will have to report you." },
        { id: 514644, content: "I will just end the chat. Bye." },
      ], // ~6 random other user’s responses
      cupsResponse: "You have repeatedly broken community guidelines. I’m sorry, but I’m going to end this chat.", // the model response from 7 cups
      cupsResponseDescription:
        "Make sure to let the members know that they have broken which part of the community guideline specifically and that you have reported.",
      nextStep: true, // true if there’s another step after this one, false otherwise
    },

    // STEP 10
    {
      badResponse: "", // the bad user's response
      options: [
        {
          id: 235623,
          content: "Remain professional, kind, and respectful",
          selected: 0.85,
        },
        { id: 261262, content: "Do not share personal contact information", selected: 0.8 },
        { id: 261261, content: "Maintain confidential atmosphere", selected: 0.1 },
      ],
      correctOptions: [235623, 261262], // id of options array
      description:
        "", // little explanation of the correct answer
      otherResponses: [], // ~6 random other user’s responses
      cupsResponse: "", // the model response from 7 cups
      cupsResponseDescription:
        "",
      nextStep: false, // true if there’s another step after this one, false otherwise
    },

    // STEP 11
    // Giving a detailed report helps 7 Cups in finding and addressing instances of bad behavior faster. You can also help provide more context by including the flagged messages as part of the report. 

  ],
};
