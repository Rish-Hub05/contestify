import { useState } from "react";

function TabNavigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: "all", label: "All" },
    { id: "upcoming", label: "Upcoming" },
    { id: "ongoing", label: "Ongoing" },
    { id: "completed", label: "Completed" }
  ];

  return (
    <div style={{ 
      display: "flex", 
      gap: "10px", 
      marginBottom: "30px",
      borderBottom: "2px solid #eee",
      paddingBottom: "0"
    }}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          style={{
            padding: "12px 24px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: activeTab === tab.id ? "bold" : "normal",
            color: activeTab === tab.id ? "#007bff" : "#666",
            borderBottom: activeTab === tab.id ? "2px solid #007bff" : "2px solid transparent",
            marginBottom: "-2px",
            transition: "all 0.3s ease",
            borderRadius: "4px 4px 0 0"
          }}
          onMouseEnter={(e) => {
            if (activeTab !== tab.id) {
              e.target.style.backgroundColor = "#f8f9fa";
            }
          }}
          onMouseLeave={(e) => {
            if (activeTab !== tab.id) {
              e.target.style.backgroundColor = "transparent";
            }
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TabNavigation;
