import Score from "./Score";

export default function Learner({ learner = {} }) {
  return (
    <div>
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      {learner.scores && learner.scores.map((score) => <Score key={score.date} score={score} />)}
    </div>
  );
}
