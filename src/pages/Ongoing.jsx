import ContestList from "../components/ContestList";

function Ongoing() {
  const now = new Date().toISOString();
  return (
    <div>
      <h2>Ongoing Contests</h2>
      <ContestList filter={`start__lt=${now}&end__gt=${now}`} />
    </div>
  );
}

export default Ongoing;
