import { useEffect, useState } from "react";
import axios from "axios";
import ContestCard from "./ContestCard";

function ContestList({ filter }) {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true); // track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // start loading
        const username = process.env.REACT_APP_CLIST_USERNAME;
        const apiKey = process.env.REACT_APP_CLIST_API_KEY;

        const url = `https://clist.by/api/v2/contest/?username=${username}&api_key=${apiKey}&${filter}&order_by=start`;

        const res = await axios.get(url);

        // filter required sites
        const filtered = res.data.objects.filter(c =>
          ["leetcode.com", "codeforces.com", "codechef.com"].some(site =>
            c.host.toLowerCase().includes(site)
          )
        );

        setContests(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // stop loading in both success & error
      }
    };

    fetchData();
  }, [filter]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
      {loading ? (
        <p>Loading contests...</p>
      ) : contests.length === 0 ? (
        <p>No contests found</p>
      ) : (
        contests.map(c => <ContestCard key={c.id} contest={c} />)
      )}
    </div>
  );
}

export default ContestList;
