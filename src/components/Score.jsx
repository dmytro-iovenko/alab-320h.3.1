export default function Score({ score }) {
  return (
    <li>
      Date: {score.date}, Score: {score.score || "-"}
    </li>
  );
}
