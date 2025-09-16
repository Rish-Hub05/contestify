import { useState } from "react";
import ContestList from "../components/ContestList";
import OverviewCards from "../components/OverviewCards";
import TabNavigation from "../components/TabNavigation";
import SearchFilter from "../components/SearchFilter";

function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [filters, setFilters] = useState({
    searchTerm: "",
    platform: "",
    duration: ""
  });

  const getTabFilter = () => {
    const now = new Date();
    const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
    
    const nowISO = now.toISOString().split(".")[0];
    const twoWeeksAgoISO = twoWeeksAgo.toISOString().split(".")[0];

    switch (activeTab) {
      case "upcoming":
        return `start__gt=${nowISO}`;
      case "ongoing":
        return `start__lt=${nowISO}&end__gt=${nowISO}`;
      case "completed":
        return `end__lt=${nowISO}&end__gt=${twoWeeksAgoISO}`;
      default:
        return "";
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const getCombinedFilter = () => {
    let filter = getTabFilter();
    
    // Add duration filter (keep server-side for performance)
    if (filters.duration) {
      let durationFilter = "";
      switch (filters.duration) {
        case "short":
          durationFilter = "duration__lt=7200"; // < 2 hours
          break;
        case "medium":
          durationFilter = "duration__lt=21600"; // < 6 hours
          break;
        case "long":
          durationFilter = "duration__gt=21600"; // > 6 hours
          break;
        default:
          durationFilter = "";
          break;
      }
      if (durationFilter) {
        filter += filter ? `&${durationFilter}` : durationFilter;
      }
    }
    
    return filter;
  };

  // Memoize the combined filter to prevent unnecessary re-renders
  const combinedFilter = getCombinedFilter();

  return (
    <div>
      <h1 style={{ marginBottom: "30px", fontSize: "32px", color: "#333" }}>Contest Dashboard</h1>
      
      <OverviewCards />
      
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <SearchFilter onFilterChange={handleFilterChange} />
      
      <ContestList filter={combinedFilter} searchTerm={filters.searchTerm} platform={filters.platform} />
    </div>
  );
}

export default Home;
