export const listenerDb = {
  fakeName: "sunset1242",
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
        { id: 514623, content: "How are you today?" },
        {
          id: 514233,
          content: "Hello, there how are you? I am jim. How are you today?",
        },
        { id: 512362, content: "How are you today?" },
        { id: 514644, content: "How are you today?" },
        { id: 490862, content: "How are you today?" },
      ], // ~5 random other user’s responses
      nextStep: true, // true if there’s another step after this one, false otherwise
    },
  ],
};
