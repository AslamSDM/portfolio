"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as Mentiq from "mentiq-sdk";

interface MentiqProviderProps {
  children: React.ReactNode;
}

export function MentiqProvider({ children }: MentiqProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Mentiq Analytics
    // Replace with your actual Mentiq project ID and API key
    Mentiq.init({
      endpoint: "http://65.109.6.92",
      apiKey: process.env.NEXT_PUBLIC_MENTIQ_API_KEY || "your-api-key",
      projectId: process.env.NEXT_PUBLIC_MENTIQ_PROJECT_ID || "your-project-id",
      debug: process.env.NODE_ENV === "development",
      enableAutoPageTracking: true,
      enableHeatmapTracking: true,
      enableSessionRecording: true,
      enableErrorTracking: true,
      enablePerformanceTracking: true,
    });

    // Track initial page view
    Mentiq.page({
      title: document.title,
      url: window.location.href,
      path: pathname,
      referrer: document.referrer,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Track page views on route change
    if (pathname) {
      Mentiq.page({
        title: document.title,
        url: window.location.href,
        path: pathname,
        referrer: document.referrer,
        search: searchParams?.toString() || "",
      });
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Track scroll depth
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        if (scrollDepth >= 25 && scrollDepth < 50) {
          Mentiq.track("scroll_depth", { depth: "25%", page: pathname });
        } else if (scrollDepth >= 50 && scrollDepth < 75) {
          Mentiq.track("scroll_depth", { depth: "50%", page: pathname });
        } else if (scrollDepth >= 75 && scrollDepth < 100) {
          Mentiq.track("scroll_depth", { depth: "75%", page: pathname });
        } else if (scrollDepth >= 100) {
          Mentiq.track("scroll_depth", { depth: "100%", page: pathname });
        }
      }
    };

    // Track time on page on visibility change
    let pageStartTime = Date.now();
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeOnPage = Math.round((Date.now() - pageStartTime) / 1000);
        Mentiq.track("time_on_page", {
          duration: timeOnPage,
          page: pathname,
        });
      } else {
        pageStartTime = Date.now();
      }
    };

    // Track user leaving page
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - pageStartTime) / 1000);
      Mentiq.track("page_exit", {
        duration: timeOnPage,
        page: pathname,
        maxScrollDepth,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]);

  return <>{children}</>;
}

// Export Mentiq utilities for use in components
export { Mentiq };

// Utility functions for common tracking events
export const trackButtonClick = (
  buttonName: string,
  properties?: Record<string, string | number | boolean>
) => {
  Mentiq.track("button_click", {
    buttonName,
    ...properties,
  });
};

export const trackLinkClick = (linkUrl: string, linkText: string) => {
  Mentiq.track("link_click", {
    url: linkUrl,
    text: linkText,
  });
};

export const trackFormSubmit = (
  formName: string,
  properties?: Record<string, string | number | boolean>
) => {
  Mentiq.track("form_submit", {
    formName,
    ...properties,
  });
};

export const trackDownload = (fileName: string, fileType: string) => {
  Mentiq.track("file_download", {
    fileName,
    fileType,
  });
};

export const trackProjectView = (projectName: string, projectType: string) => {
  Mentiq.track("project_view", {
    projectName,
    projectType,
  });
};

export const trackSectionView = (sectionName: string) => {
  Mentiq.track("section_view", {
    sectionName,
  });
};

export const trackSocialClick = (platform: string, url: string) => {
  Mentiq.track("social_click", {
    platform,
    url,
  });
};

export const trackVideoPlay = (videoName: string, duration?: number) => {
  Mentiq.track("video_play", {
    videoName,
    duration,
  });
};

export const trackError = (errorType: string, errorMessage: string) => {
  Mentiq.track("error", {
    errorType,
    errorMessage,
    page: typeof window !== "undefined" ? window.location.pathname : "",
  });
};

export const identifyUser = (
  userId: string,
  traits?: Record<string, string | number | boolean>
) => {
  Mentiq.identify(userId, traits);
};
