import { useEffect, useState } from "react";
import axios from "axios";

function OverviewCards() {
  const [counts, setCounts] = useState({
    upcoming: 0,
    ongoing: 0,
    completed: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        setLoading(true);
        const username = process.env.REACT_APP_CLIST_USERNAME;
        const apiKey = process.env.REACT_APP_CLIST_API_KEY;

        // Check if environment variables are set
        console.log("Environment variables check:");
        console.log("REACT_APP_CLIST_USERNAME:", username);
        console.log("REACT_APP_CLIST_API_KEY:", apiKey ? "***" : "not set");
        
        if (!username || !apiKey) {
          console.error("API credentials not found in environment variables");
          setCounts({ upcoming: 0, ongoing: 0, completed: 0 });
          return;
        }

        const now = new Date();
        const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

        // Fetch all contests
        const allUrl = `https://clist.by/api/v2/contest/?username=${username}&api_key=${apiKey}&order_by=start`;
        console.log("Fetching contests from:", allUrl);
        
        const res = await axios.get(allUrl);
        console.log("API response status:", res.status);
        console.log("API response data:", res.data);
        
        if (!res.data || !res.data.objects) {
          console.error("Invalid API response format");
          setCounts({ upcoming: 0, ongoing: 0, completed: 0 });
          return;
        }

        // Filter for supported platforms
        const filteredContests = res.data.objects.filter(c => {
          const platform = (c.resource?.name || c.host || "").toLowerCase();
          return ["leetcode.com", "codeforces.com", "codechef.com"].some(site =>
            platform.includes(site)
          );
        });

        console.log("Filtered contests:", filteredContests.length);

        // Count contests by status
        const counts = {
          upcoming: 0,
          ongoing: 0,
          completed: 0
        };

        filteredContests.forEach(contest => {
          const startTime = new Date(contest.start);
          const endTime = new Date(contest.end);

          if (endTime < now) {
            // Completed contests (last 2 weeks)
            if (endTime >= twoWeeksAgo) {
              counts.completed++;
            }
          } else if (startTime <= now && endTime >= now) {
            // Ongoing contests
            counts.ongoing++;
          } else if (startTime > now) {
            // Upcoming contests
            counts.upcoming++;
          }
        });

        console.log("Final counts:", counts);
        setCounts(counts);
      } catch (err) {
        console.error("Error fetching contest counts:", err);
        // Set default counts on error
        setCounts({ upcoming: 0, ongoing: 0, completed: 0 });
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ 
            flex: 1, 
            padding: "20px", 
            border: "1px solid #ddd", 
            borderRadius: "8px",
            backgroundColor: "#f5f5f5"
          }}>
            <div>Loading...</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
      <div style={{ 
        flex: 1, 
        padding: "20px", 
        border: "1px solid #4CAF50", 
        borderRadius: "8px",
        backgroundColor: "#E8F5E8",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "24px", marginBottom: "10px" }}>🟢</div>
        <div style={{ fontSize: "28px", fontWeight: "bold", color: "#4CAF50" }}>
          {counts.upcoming}
        </div>
        <div style={{ fontSize: "14px", color: "#666" }}>Upcoming Contests</div>
      </div>
      
      <div style={{ 
        flex: 1, 
        padding: "20px", 
        border: "1px solid #FF9800", 
        borderRadius: "8px",
        backgroundColor: "#FFF3E0",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "24px", marginBottom: "10px" }}>🟠</div>
        <div style={{ fontSize: "28px", fontWeight: "bold", color: "#FF9800" }}>
          {counts.ongoing}
        </div>
        <div style={{ fontSize: "14px", color: "#666" }}>Ongoing Contests</div>
      </div>
      
      <div style={{ 
        flex: 1, 
        padding: "20px", 
        border: "1px solid #9E9E9E", 
        borderRadius: "8px",
        backgroundColor: "#F5F5F5",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "24px", marginBottom: "10px" }}>⚪</div>
        <div style={{ fontSize: "28px", fontWeight: "bold", color: "#9E9E9E" }}>
          {counts.completed}
        </div>
        <div style={{ fontSize: "14px", color: "#666" }}>Completed (Last 2 Weeks)</div>
      </div>
    </div>
  );
}

export default OverviewCards;
