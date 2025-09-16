import { useEffect, useState } from "react";
import axios from "axios";
import ContestCard from "./ContestCard";

function ContestList({ filter, searchTerm = "", platform = "" }) {
  const [contests, setContests] = useState([]);
  const [filteredContests, setFilteredContests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const username = process.env.REACT_APP_CLIST_USERNAME;
        const apiKey = process.env.REACT_APP_CLIST_API_KEY;

        const url = `https://clist.by/api/v2/contest/?username=${username}&api_key=${apiKey}&${filter}&order_by=start`;

        const res = await axios.get(url);

        // Filter required sites
        const filtered = res.data.objects.filter(c => {
          const platform = (c.resource?.name || c.host || "").toLowerCase();
          return ["leetcode.com", "codeforces.com", "codechef.com"].some(site =>
            platform.includes(site)
          );
        });

        setContests(filtered);
        setFilteredContests(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  // Apply search and platform filters client-side
  useEffect(() => {
    let filtered = contests;
    
    // Apply platform filter
    if (platform) {
      filtered = filtered.filter(contest => {
        const contestPlatform = (contest.resource?.name || contest.host || "").toLowerCase();
        return contestPlatform.includes(platform.toLowerCase());
      });
    }
    
    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(contest => {
        return (
          contest.event?.toLowerCase().includes(searchLower) ||
          contest.resource?.name?.toLowerCase().includes(searchLower) ||
          contest.host?.toLowerCase().includes(searchLower)
        );
      });
    }
    
    setFilteredContests(filtered);
  }, [searchTerm, platform, contests]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
      {loading ? (
        <p>Loading contests...</p>
      ) : filteredContests.length === 0 ? (
        <p>No contests found</p>
      ) : (
        filteredContests.map(c => <ContestCard key={c.id} contest={c} />)
      )}
    </div>
  );
}

export default ContestList;
