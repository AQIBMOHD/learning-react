// Shimmer.js
import React from "react";

const Shimmer = () => {
  const cardCount = 20; // Increased to ensure full UI coverage

  return (
    <div className="shimmer-container">
      {Array(cardCount)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-content">
              <div className="shimmer-line shimmer-title"></div>
              <div className="shimmer-line shimmer-subtitle"></div>
              <div className="shimmer-line shimmer-details"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;