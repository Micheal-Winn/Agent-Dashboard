"use client"

import React from 'react';
import * as Progress from '@radix-ui/react-progress';

interface ProgressTypes{
  progress:number;
  color:string
}

const ProgressBar = ({progress,color}:ProgressTypes) => {
  return (
    <Progress.Root
      className="relative overflow-hidden bg-blackA9 rounded-full w-full h-[4px] sm:h-[7px] lg:h-[6px] 2xl:h-[3px]"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: 'translateZ(0)',
      }}
      value={progress}
    >
      <Progress.Indicator
        className={`${color} w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]`}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressBar;