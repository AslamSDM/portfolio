"use client";

import React, { useEffect, ReactNode } from "react";
import {
  MentiqAnalyticsProvider,
  useAnalytics as useMentiqAnalytics,
} from "mentiq-sdk";
import { usePathname, useSearchParams } from "next/navigation";

// Custom hook for page views
const usePageViews = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { page } = useMentiqAnalytics();

  useEffect(() => {
    const url = `${pathname}${
      searchParams.toString() ? `?${searchParams.toString()}` : ""
    }`;
    page({ path: url });
  }, [pathname, searchParams, page]);
};

// PageViewTracker component
const PageViewTracker = () => {
  usePageViews();
  return null;
};

// Main Mentiq Provider
export const MentiqProvider = ({ children }: { children: ReactNode }) => {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_MENTIQ_API_KEY || "",
    projectId: process.env.NEXT_PUBLIC_MENTIQ_PROJECT_ID || "",
    enableHeatmapTracking: true,
    enableSessionRecording: true,
    enableErrorTracking: true,
    enablePerformanceTracking: true,
    enableAutoPageTracking: false, // We are using a custom page view tracker
  };

  if (!config.apiKey || !config.projectId) {
    console.warn(
      "Mentiq Analytics: API Key or Project ID is missing. Tracking is disabled."
    );
    return <>{children}</>;
  }

  return (
    <MentiqAnalyticsProvider config={config}>
      <PageViewTracker />
      {children}
    </MentiqAnalyticsProvider>
  );
};

// Export the analytics hook for easy use in other components
export const useAnalytics = useMentiqAnalytics;
