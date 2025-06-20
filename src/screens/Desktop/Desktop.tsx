import React from "react";
import { AfterHeaderSubsection } from "./sections/AfterHeaderSubsection/AfterHeaderSubsection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";

export const Desktop = (): JSX.Element => {
  return (
    <main className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1440px]">
        <FrameSubsection />
        <AfterHeaderSubsection />
        <FrameWrapperSubsection />
      </div>
    </main>
  );
};
