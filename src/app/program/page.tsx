import type { Metadata } from "next";
import ProgramPageClient from "./ProgramPageClient";

export const metadata: Metadata = {
  title: "Program Structure & Challenges | Olympus – The HR League",
  description:
    "Explore the two-phase program structure of Olympus - Online Pre-Challenge and Offline Finale. Complete ethical HR challenges to showcase your leadership.",
};

export default function ProgramPage() {
  return <ProgramPageClient />;
}
