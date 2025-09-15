function ContestCard({ contest }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px" }}>
      <h3>{contest.event}</h3>
      <p><strong>Platform:</strong> {contest.resource.name}</p>
      <p><strong>Start:</strong> {new Date(contest.start).toLocaleString()}</p>
      <p><strong>End:</strong> {new Date(contest.end).toLocaleString()}</p>
      <p><strong>Duration:</strong> {Math.round(contest.duration / 3600)} hrs</p>
      <a href={contest.href} target="_blank" rel="noreferrer">🔗 Join Contest</a>
    </div>
  );
}

export default ContestCard;
