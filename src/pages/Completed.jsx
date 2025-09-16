import ContestList from "../components/ContestList";

function Completed() {
  const now = new Date();
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  const nowISO = now.toISOString().split(".")[0]; 
  const twoWeeksAgoISO = twoWeeksAgo.toISOString().split(".")[0];

  return (
    <div>
      <h2>Completed Contests (Last 2 Weeks)</h2>
      <ContestList filter={`end__lt=${nowISO}&end__gt=${twoWeeksAgoISO}`} />
    </div>
  );
}

export default Completed;
