import { useState } from "react";
import learnersData from "./data/learners";
import Learner from "./components/Learner";

function App() {
  const [learners, setLearners] = useState(learnersData);
  return (
    <>
      {learners.map((learner) => (
        <Learner key={learner.name} learner={learner} />
      ))}
    </>
  );
}

export default App;
