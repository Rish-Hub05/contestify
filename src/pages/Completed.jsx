import ContestList from "../components/ContestList";

function Completed() {
  const now = new Date().toISOString();
  return (
    <div>
      <h2>Completed Contests</h2>
      <ContestList filter={`end__lt=${now}`} />
    </div>
  );
}

export default Completed;
