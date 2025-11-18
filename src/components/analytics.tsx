"use client";

import dynamic from "next/dynamic";
import React from "react";

const MentiqProvider = dynamic(
  () =>
    import("@/components/mentiq-provider").then((mod) => mod.MentiqProvider),
  {
    ssr: false,
    loading: () => null, // You can add a loading spinner here if you want
  }
);

export function Analytics({ children }: { children: React.ReactNode }) {
  return <MentiqProvider>{children}</MentiqProvider>;
}
