"use client";
import React, { useEffect, useRef, useState } from "react";

interface CircleButtonProps {
    rings: number;
}

interface RecursiveRingProps {
  currentRings: number;
  fatherDimension: {
      w: number;
      h: number;
    };
}
const RECURSIVE_FACTOR = 0.8

function RecursiveRing({ currentRings, fatherDimension }: Readonly<RecursiveRingProps>) {
  if (currentRings === 0) return null;

  const padding = currentRings;

  return (
    <div
      className=" rounded-full border border-[#2928ff] flex justify-center items-center"
      style={{
        width: `${fatherDimension.w}px`,
        height: `${fatherDimension.w}px`,
        padding: `${padding}px`,
      }}
    >
      <RecursiveRing
        currentRings={currentRings - 1}
        fatherDimension={{
          w: fatherDimension.w * RECURSIVE_FACTOR,
          h: fatherDimension.h * RECURSIVE_FACTOR,
        }}
      />
    </div>
  );
}

export function RecursiveCircleButton({ rings }: CircleButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [dimmensions, setDimmensions] = useState<{ w: number; h: number }>(
    {} as { w: number; h: number },
  );
  useEffect(() => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setDimmensions({ w: width * RECURSIVE_FACTOR, h: height * RECURSIVE_FACTOR});
  }, []);
  return (
    <div className="h-full w-full flex justify-center items-center aspect-square" ref={ref}>
      <RecursiveRing currentRings={rings} fatherDimension={dimmensions} />
    </div>
  );
}
