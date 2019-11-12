import React, { useState } from "react";
import "./Features.scss";
import { FeaturesInfo } from "./FeaturesInfo";

import FeatureCard from "./FeatureCard";

export default function Features() {
  const [position, setPosition] = useState(0);

  const handleLeftClick = () => {
    setPosition(position - 275);
  };

  const handleRightClick = () => {
    setPosition(position + 275);
  };

  return (
    <div>
      <h2>Features</h2>
      <div className="carousel">
        {position > -550 && (
          <button className="scroll-btn left-scroll" onClick={handleLeftClick}>
            &lsaquo;
          </button>
        )}
        <div className="container">
          <div
            className="content"
            style={{ transform: `translate(${position}px)` }}
          >
            {FeaturesInfo.map(feature => (
              <FeatureCard
                imgUrl={feature.imgUrl}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
        {position < 0 && (
          <button
            className="scroll-btn right-scroll"
            onClick={handleRightClick}
          >
            &rsaquo;
          </button>
        )}
      </div>
    </div>
  );
}
