import listenerDb from "../../../../db/listenerDb";
import memberDb from "../../../../db/memberDb";

export default (req, res) => {
  let res = {};

  try {
    if (req.params.scenarioId === "listener") {
      res = listenerDb.steps[req.params.stepId];
    } else if (req.params.scenarioId === "member") {
      res = memberDb.steps[req.params.stepId];
    } else {
      res.status(404).json({ error: "Not found" });
    }

    res.status(200).json(res);
  } catch (e) {
    res.status(500).json({ error: "Server error" });
  }
};
