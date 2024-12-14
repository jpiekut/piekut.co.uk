import React from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
}

export const Slider = ({ value, onChange, min, max, step = 1 }: SliderProps) => {
  return (
    <div className="relative w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-purple-900/40 rounded-lg appearance-none cursor-pointer accent-purple-500"
      />
      <div className="mt-1 text-right">
        <span className="text-sm text-gray-400">{value.toFixed(1)}</span>
      </div>
    </div>
  );
};