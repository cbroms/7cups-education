import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import {step1data} from "../../../../db/scenario0.js"

import {updateData} from "../../../../helpers/dbHelpers"


const Step = () => {
  const router = useRouter();
  const { scenarioId, stepId } = router.query;

  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch from the api here
    setData({
      options: [
        { id: 235623, content: "Inquire about their situation" },
        { id: 261262, content: "Suggest some options" },
      ],
      correctOption: 235623, // id of options array
      description: "What should you do next?", // little explanation of the correct answer
      otherResponses: [{ id: 51462, content: "How are you today?" }], // ~5 random other user’s responses
      nextStep: true, // true if there’s another step after this one, false otherwise
    });
  }, []);

  

  console.log(step1data);

  return (
    <>
    <p>
      Step: {scenarioId}, {stepId}
    </p>
    <button onClick={() => updateData(step1data, 9)}>"Option 9"</button>
    </>
  );
  
};

export default Step;
