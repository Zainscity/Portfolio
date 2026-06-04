"use client";

import React from "react";
import { LottieAnimation } from "./lottie-animation";
import animationData from "@/assets/animations/background_animation.json";

/**
 * A full-page background animation using Lottie.
 * This version uses the same animation for both light and dark themes.
 */
export function LottieBackground() {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden pointer-events-none">
      <LottieAnimation
        animationData={animationData}
        className="w-full h-full"
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
