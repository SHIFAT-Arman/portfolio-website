"use client";
import { Spinner } from "@/components/ui/Spinner";

export default function Loading() {
  console.log("Loading...");
  // Or a custom loading skeleton component
  return <Spinner className=" z-[9999]"></Spinner>;
}
