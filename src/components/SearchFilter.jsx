import { useState } from "react";

function SearchFilter({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");

  const platforms = [
    { value: "", label: "All Platforms" },
    { value: "leetcode.com", label: "LeetCode" },
    { value: "codeforces.com", label: "Codeforces" },
    { value: "codechef.com", label: "CodeChef" }
  ];

  const durations = [
    { value: "", label: "All Durations" },
    { value: "short", label: "Short (< 2 hrs)" },
    { value: "medium", label: "Medium (< 6 hrs)" },
    { value: "long", label: "Long (> 6 hrs)" }
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange({ searchTerm: value, platform: selectedPlatform, duration: selectedDuration });
  };

  const handlePlatformChange = (e) => {
    const value = e.target.value;
    setSelectedPlatform(value);
    onFilterChange({ searchTerm, platform: value, duration: selectedDuration });
  };

  const handleDurationChange = (e) => {
    const value = e.target.value;
    setSelectedDuration(value);
    onFilterChange({ searchTerm, platform: selectedPlatform, duration: value });
  };

  return (
    <div style={{ 
      display: "flex", 
      gap: "15px", 
      marginBottom: "30px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
      <div style={{ flex: 1, minWidth: "200px" }}>
        <input
          type="text"
          placeholder="Search contests..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            width: "100%",
            padding: "10px 15px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            fontSize: "14px",
            boxSizing: "border-box"
          }}
        />
      </div>
      
      <div style={{ minWidth: "150px" }}>
        <select
          value={selectedPlatform}
          onChange={handlePlatformChange}
          style={{
            width: "100%",
            padding: "10px 15px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            fontSize: "14px",
            backgroundColor: "white",
            cursor: "pointer"
          }}
        >
          {platforms.map(platform => (
            <option key={platform.value} value={platform.value}>
              {platform.label}
            </option>
          ))}
        </select>
      </div>
      
      <div style={{ minWidth: "150px" }}>
        <select
          value={selectedDuration}
          onChange={handleDurationChange}
          style={{
            width: "100%",
            padding: "10px 15px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            fontSize: "14px",
            backgroundColor: "white",
            cursor: "pointer"
          }}
        >
          {durations.map(duration => (
            <option key={duration.value} value={duration.value}>
              {duration.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
