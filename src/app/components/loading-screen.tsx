"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../styling/loading-screen.css';

interface LoadingScreenProps {
  children: React.ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let loadingComplete = false;

    // Simulate progress during loading
    const updateProgress = () => {
      setProgress(prev => {
        if (prev >= 90 && !loadingComplete) {
          return prev; // Hold at 90% until actual loading is complete
        }
        return Math.min(prev + Math.random() * 10, 90);
      });
    };

    // Start progress simulation
    progressInterval = setInterval(updateProgress, 100);

    const handleLoad = () => {
      loadingComplete = true;
      
      // Complete the progress bar
      setProgress(100);
      
      // Wait a bit to show 100% before hiding
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Wait for all resources to load
      window.addEventListener('load', handleLoad);
    }

    // Fallback timeout to prevent infinite loading
    const fallbackTimeout = setTimeout(() => {
      if (isLoading) {
        handleLoad();
      }
    }, 8000);

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimeout);
    };
  }, [isLoading]);

  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Logo and brand */}
        <div className="loading-logo">
          <div className="logo-container">
            <div className="logo-circle">
              <Image 
                src="/logo.png" 
                width={50} 
                height={50} 
                alt="ElectroMaster Logo" 
                className="logo-image"
              />
            </div>
          </div>
          <h2 className="loading-title">ElectroMaster</h2>
          <p className="loading-subtitle">Quality Welding Rod Manufacturer</p>
        </div>

        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="progress-text">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Loading dots animation */}
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
