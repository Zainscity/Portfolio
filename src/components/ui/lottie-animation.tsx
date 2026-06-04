"use client";

import React from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

/**
 * A reusable Lottie animation component.
 * @param animationData The JSON animation data or a path to the JSON file.
 * @param className Optional CSS classes for styling the container.
 * @param loop Whether the animation should loop.
 * @param autoplay Whether the animation should start automatically.
 */
export function LottieAnimation({
  animationData,
  className = "",
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
    </div>
  );
}
