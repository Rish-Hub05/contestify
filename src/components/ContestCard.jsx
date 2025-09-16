function ContestCard({ contest }) {
  const hours = Math.floor(contest.duration / 3600);
  const mins = Math.floor((contest.duration % 3600) / 60);

  const now = new Date();
  const startTime = new Date(contest.start + "Z");
const endTime = new Date(contest.end + "Z");


  let actionLabel = "🔗 Join Contest";
  if (endTime < now) {
    actionLabel = "📜 View Contest";
  } else if (startTime < now && endTime > now) {
    actionLabel = "🔥 Ongoing Contest";
  }

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px" }}>
      <h3>{contest.event}</h3>
      <p><strong>Platform:</strong> {contest.resource.name}</p>
      <p><strong>Start:</strong> {startTime.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
<p><strong>End:</strong> {endTime.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>

      <p><strong>Duration:</strong> {hours}h {mins}m</p>
      <a href={contest.href} target="_blank" rel="noreferrer">{actionLabel}</a>
    </div>
  );
}

export default ContestCard;
