import React from 'react';
import { Slider } from '@/components/ui/Slider';

interface ControlsProps {
  controls: {
    gravity: number;
    snowflake_initial_velocity: number;
    x_axis_wind_velocity: number;
    z_axis_wind_velocity: number;
    ball_initial_velocity: number;
    red_ball_size: number;
  };
  onChange: (key: string, value: number) => void;
}

export const SnowlandControls = ({ controls, onChange }: ControlsProps) => {
  return (
    <div className="bg-purple-900/20 border border-purple-500/20 rounded-xl p-6 space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Simulation Controls</h3>
      
      <div className="space-y-4">
        <div>
          <label className="text-gray-300 text-sm mb-2 block">Gravity</label>
          <Slider
            value={controls.gravity}
            onChange={(value) => onChange('gravity', value)}
            min={0}
            max={100}
            step={0.1}
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm mb-2 block">Snowflake Velocity</label>
          <Slider
            value={controls.snowflake_initial_velocity}
            onChange={(value) => onChange('snowflake_initial_velocity', value)}
            min={0}
            max={100}
            step={0.1}
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm mb-2 block">Wind (X-Axis)</label>
          <Slider
            value={controls.x_axis_wind_velocity}
            onChange={(value) => onChange('x_axis_wind_velocity', value)}
            min={-10}
            max={10}
            step={0.1}
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm mb-2 block">Wind (Z-Axis)</label>
          <Slider
            value={controls.z_axis_wind_velocity}
            onChange={(value) => onChange('z_axis_wind_velocity', value)}
            min={-10}
            max={10}
            step={0.1}
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm mb-2 block">Ball Initial Velocity</label>
          <Slider
            value={controls.ball_initial_velocity}
            onChange={(value) => onChange('ball_initial_velocity', value)}
            min={0}
            max={100}
            step={0.1}
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm mb-2 block">Ball Size</label>
          <Slider
            value={controls.red_ball_size}
            onChange={(value) => onChange('red_ball_size', value)}
            min={1}
            max={6}
            step={0.1}
          />
        </div>
      </div>
    </div>
  );
};