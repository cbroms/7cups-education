export const listenerDb = {
  badUserName: "sunset1242",
  initialMessages: [
    {
      author: "me",
      content: "Hi, welcome to 7Cups, what can I get you?",
    },
  ],
  steps: [
    {
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
        "At this point it would probably be best to inquire more about their situation.", // little explanation of the correct answer
      otherResponses: [
        { id: 514632, content: "How are you today?" },
        { id: 514623, content: "Ok?" },
        {
          id: 514233,
          content: "Hello, there how are you?",
        },
        { id: 512362, content: "That's not very nice." },
        { id: 514644, content: "Hmm" },
        { id: 490862, content: "Don't be a mean person." },
      ], // ~5 random other user’s responses
      cupsResponse: "Hello, how's it going?",
      badResponse: "you're dumb",
      nextStep: false, // true if there’s another step after this one, false otherwise
    },
  ],
};
