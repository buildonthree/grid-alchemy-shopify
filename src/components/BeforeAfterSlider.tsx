import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  className = ""
}) => {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className={`relative w-full h-96 overflow-hidden rounded-lg ${className}`}>
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-md">
          <span className="text-sm font-medium text-foreground">Before</span>
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-md">
          <span className="text-sm font-medium text-foreground">After</span>
        </div>
      </div>

      {/* Slider Control */}
      <div className="absolute inset-x-4 bottom-8">
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          max={100}
          min={0}
          step={1}
          className="w-full cursor-grab active:cursor-grabbing"
        />
      </div>

      {/* Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
        style={{ left: `${sliderValue[0]}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-4 h-4 border-l-2 border-r-2 border-primary"></div>
        </div>
      </div>
    </div>
  );
};