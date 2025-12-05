"use client";

import React, { useState, useEffect } from 'react';
import '../styling/loading-screen.css';

interface LoadingScreenProps {
  children: React.ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple timeout to simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className="loading-screen">
      <div className="loading-logo">
        ELECTRO<span>MASTER</span>
      </div>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingScreen;
