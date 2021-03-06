export const listenerDb = {
  badUserName: "sunset1242",
  initialMessages: [
    {
      author: "me",
      content: "Hello! nice to meet you",
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
        { id: 261262, content: "Suggest a few options", selected: 0.03 },
        { id: 261261, content: "Something else", selected: 0.1 },
      ],
      correctOption: 235623, // id of options array
      description:
        "At this point it would probably be best to inquire more about their situation.", // little explanation of the correct answer
      otherResponses: [
        {
          id: 514632,
          content: "What’s on your mind?",
          feedback:
            "This is an okay response, but could include more detail and empathetic language.",
          rating: 0,
        },
        {
          id: 514623,
          content: "That’s interesting... tell me more.",
          feedback:
            "This response is vague and could come across as being inattentive to what the user is speaking to you about.",
          rating: 0,
        },
        {
          id: 514233,
          content: "That's interesting to hear",
          feedback:
            "This is an inappropriate response that doesn't show active listening. It doesn't open up the conversation for support.",
          rating: -1,
        },
        {
          id: 512362,
          content:
            "I’m sorry, I feel that way sometimes too. Do you want to talk about it? I’m here to help.",
          feedback:
            "This is a strong response that shows active listening and empathy, while also prompting the member to elaborate if they feel comfortable.",
          rating: 1,
        },
        {
          id: 514644,
          content:
            "Feeling lonely is a normal thing! Is there anything in particular that is going on?",
          feedback:
            "This is a strong response that reassures the member wile also prompting them to elaborate if they feel comfortable.",
          rating: 1,
        },
      ], // ~6 random other user’s responses
      cupsResponse:
        "I’m sorry that you’re feeling lonely. That can be a very isolating feeling. Do you want to talk more about it?", // the model response from 7 cups
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
      cupsResponseDescription: "",
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
        {
          id: 261262,
          content: "Ask more about their situation",
          selected: 0.24,
        },
        { id: 261261, content: "Something else", selected: 0.01 },
      ],
      correctOption: 235623, // id of options array
      description:
        "After flagging, be sure to give them a verbal reminder that they should be respectful and polite in chats. Make sure they’re aware what behavior is acceptable on 7 Cups.", // little explanation of the correct answer
      otherResponses: [
        {
          id: 514632,
          content:
            "I’m here to help you, but the spaces here must be treated with mutual respect.",
          feedback:
            "This response is an appropriate and succinct warning. It might be useful to refer to the guidelines.",
          rating: 0,
        },
        {
          id: 514623,
          content: "Please don’t use that language. I’m here to help you.",
          feedback:
            "This response is an appropriate and succinct warning. It might be useful to refer to the guidelines.",
          rating: 0,
        },
        {
          id: 514233,
          content: "That’s not appropriate.",
          feedback:
            "This response does not show empathy and requires more elaboration on why this behavior is inappropriate.",
          rating: -1,
        },
        {
          id: 512362,
          content: "Please refer to the 7 Cups guidelines.",
          feedback:
            "It's great to refer to the guidelines, but we want to remember that members are often struggling and require a more empathetic response.",
          rating: -1,
        },
        {
          id: 514644,
          content:
            "I know that what you’re going through must be tough, but there’s no need to use that language here on 7 Cups.",
          feedback:
            "This is a strong response that shows empathy first, before appropriately warning members of what behavior is inappropriate.",
          rating: 1,
        },
      ], // ~6 random other user’s responses
      cupsResponse:
        "You must be going through a lot right now. I’m here to help, but please abide by Community guidelines and don’t use that kind of language.", // the model response from 7 cups
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
        {
          id: 261262,
          content: "Ask more about their situation",
          selected: 0.24,
        },
        { id: 261261, content: "Something else", selected: 0.01 },
      ],
      correctOption: 235623, // id of options array
      description:
        "Make sure members are aware that listeners are trained in active listening and don’t give advice.", // little explanation of the correct answer
      otherResponses: [
        {
          id: 514632,
          content:
            "I’m sorry you feel that I’m not being helpful. We can talk more about how you’re feeling. I will respond as soon as I am able to",
          feedback:
            "This is a strong response that explains how 7 Cups chats can help members. It also sets appropriate expectations between listeners and members.",
          rating: 1,
        },
        {
          id: 514623,
          content: "Please don’t use that language. I’m here to help you.",
          feedback:
            "This response is okay, but could include more information about how listeners can provide support, as well as what members should expect in 7 Cups chats.",
          rating: 0,
        },
        {
          id: 514233,
          content: "I am helping you.",
          feedback:
            "This response is dismissive and unhelpful. We should honor members' feelings, even if they are frustrated.",
          rating: -1,
        },
        {
          id: 512362,
          content: "I’m trying to help you lol.",
          feedback:
            "This response is very dismissive, unhelpful, and unprofessional. We should honor members' feelings, even if they are frustrated.",
          rating: -1,
        },

        {
          id: 514644,
          content:
            "Listeners can offer support through active listening. I’d be happy to talk with you and help you.",
          feedback:
            "This is a strong response that explains how 7 Cups chats can help members. It also sets appropriate expectations between listeners and members.",
          rating: 1,
        },
      ], // ~6 random other user’s responses
      cupsResponse:
        "I’m sorry you feel that way. As a listener, we can use emotional active listening to support you. We can discuss more about how you’re feeling. I’m dedicated to helping you, but please remember I am also human and will try to respond as soon as possible.", // the model response from 7 cups
      cupsResponseDescription:
        "Remind members of how listeners can provide support and help them in whatever they are going through, as long as it abides by Community Guidelines. Also remind members that as a listener, you are also a human with other commitments and responsibilities.",
      nextStep: true, // true if there’s another step after this one, false otherwise
    },

    // STEP 7
    {
      badResponse:
        "**** useless your a waste of time. call me at *********** i dare you", // the bad user's response
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
      cupsResponseDescription: "",
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
        {
          id: 514632,
          content: "**** why would I have to put up with someone like you",
          feedback:
            "Ensure you're also following the guidelines and remaining professional. Don't escalate the situation.",
          rating: -1,
        },
        {
          id: 514623,
          content: "Reported.",
          feedback:
            "This response doesn't provide any additional context and could just escalate the situation further.",
          rating: -1,
        },

        {
          id: 514233,
          content: "There's nothing I can do",
          feedback:
            "This response doesn't escalate the situation, but it also doesn't provide any additional context about what the member did wrong.",
          rating: 0,
        },
        {
          id: 512362,
          content:
            "You repeatedly broke our guidelines. I will have to report you and end this chat.",
          feedback:
            "This is an excellent response that lets the member know what they've done wrong, and closes the situation without escalating it.",
          rating: 1,
        },
        {
          id: 514644,
          content: "fine, i will just end the chat. bye.",
          feedback:
            "This response doesn't provide any additional context and is unprofessional.",
          rating: -1,
        },
      ], // ~6 random other user’s responses
      cupsResponse:
        "You have repeatedly broken community guidelines. I’m sorry, but I’m going to end this chat.", // the model response from 7 cups
      cupsResponseDescription:
        "Make sure to let the members know that they have broken which part of the community guideline specifically and that you have reported.",
      nextStep: true, // true if there’s another step after this one, false otherwise
    },

    // STEP 10
    {
      promptDifferent: true, // don't ask what would you do next - ask what guidelines are broken --> it's not working check vote.js
      badResponse: "", // the bad user's response
      options: [
        {
          id: 235623,
          content: "Remain professional, kind, and respectful",
          selected: 0.85,
        },
        {
          id: 261262,
          content: "Do not share personal contact information",
          selected: 0.8,
        },
        {
          id: 261261,
          content: "Maintain confidential atmosphere",
          selected: 0.1,
        },
      ],
      correctOptions: [235623, 261262], // id of options array
      description: "", // little explanation of the correct answer
      otherResponses: [], // ~6 random other user’s responses
      cupsResponse: "", // the model response from 7 cups
      cupsResponseDescription: "",
      nextStep: false, // true if there’s another step after this one, false otherwise
    },

    // STEP 11
    // Giving a detailed report helps 7 Cups in finding and addressing instances of bad behavior faster. You can also help provide more context by including the flagged messages as part of the report.
  ],
};
