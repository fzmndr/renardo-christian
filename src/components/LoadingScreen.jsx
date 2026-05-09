import { useEffect, useState } from "react";

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      setTimeout(() => {
        setIsHidden(true);
      }, 700);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (isHidden) return null;

  return (
    <div className={`loading-screen ${!isLoading ? "hide" : ""}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <span>RC</span>
        </div>

        <h1>Renardo Christian</h1>
        <p>Automotive Videographer</p>

        <div className="loading-bar">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;