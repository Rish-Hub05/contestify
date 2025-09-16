import ContestList from "../components/ContestList";

function Upcoming() {
  const now = new Date().toISOString().split(".")[0]; // safer ISO string
  return (
    <div>
      <h2>Upcoming Contests</h2>
      <ContestList filter={`start__gt=${now}`} />
    </div>
  );
}

export default Upcoming;
