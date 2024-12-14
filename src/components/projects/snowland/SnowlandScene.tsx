import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SnowlandControls } from './SnowlandControls';

interface SceneControls {
  gravity: number;
  snowflake_initial_velocity: number;
  x_axis_wind_velocity: number;
  z_axis_wind_velocity: number;
  ball_initial_velocity: number;
  red_ball_size: number;
}

export const SnowlandScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    cleanup: () => void;
    updateControl?: (key: string, value: number) => void;
  }>();

  const [controls, setControls] = useState<SceneControls>({
    gravity: 9.8,
    snowflake_initial_velocity: 10,
    x_axis_wind_velocity: 0,
    z_axis_wind_velocity: 0,
    ball_initial_velocity: 27.5,
    red_ball_size: 3,
  });

  const handleControlChange = (key: string, value: number) => {
    setControls(prev => ({ ...prev, [key]: value }));
    if (sceneRef.current?.updateControl) {
      sceneRef.current.updateControl(key, value);
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 100, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth * 0.75, window.innerHeight * 0.75);
    renderer.setClearColor(0x000000, 1);
    mountRef.current.appendChild(renderer.domElement);

    const orbitControls = new OrbitControls(camera, renderer.domElement);
    const loader = new THREE.TextureLoader();

    // Scene objects
    const snowflakeGeometry = new THREE.SphereGeometry(1, 32, 32);
    const snowflakeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const ballGeometry = new THREE.SphereGeometry(3, 32, 32);
    const ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    ball.position.set(0, 4, 77);
    scene.add(ball);

    const torusGeometry = new THREE.TorusGeometry(7, 2, 8, 20);
    const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xfefff2 });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.rotateX(-Math.PI / 2);
    torus.position.setY(1);
    scene.add(torus);

    const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 8, 20);
    const cylinder = new THREE.Mesh(cylinderGeometry, torusMaterial);
    cylinder.rotateX(-Math.PI / 4);
    cylinder.position.set(0, 1, 80);
    scene.add(cylinder);

    const planeGeometry = new THREE.PlaneGeometry(200, 200);
    const planeMaterial = new THREE.MeshBasicMaterial({
      map: loader.load('https://as1.ftcdn.net/v2/jpg/01/97/33/62/1000_F_197336242_fmbRl1DGtz6mrgjYPE12pXQ4OR4bHkwm.jpg'),
      side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotateX(-Math.PI / 2);
    scene.add(plane);

    // Snowflake setup
    const snowflakes_n = 1000;
    const snowflakes: THREE.Mesh[] = [];
    const snowflakePos: [number, number, number][] = [];
    const snowflakeTime: number[] = [];
    const snowflakeU: number[] = [];

    for (let n = 0; n < snowflakes_n; n++) {
      const snowflake = new THREE.Mesh(snowflakeGeometry, snowflakeMaterial);
      const x = 100 - Math.random() * 200;
      const y = 100 - Math.random() * 400;
      const z = 100 - Math.random() * 200;
      snowflake.position.set(x, y, z);
      snowflakeTime[n] = 0;
      snowflakeU[n] = 10;
      snowflakePos[n] = [x, y, z];
      scene.add(snowflake);
      snowflakes.push(snowflake);
    }

    let ball_y = 4, ball_z = 77, ball_time = 0;
    const clock = new THREE.Clock(true);

    // Physics calculations
    function particleDisplacement(dt: number) {
      for (let n = 0; n < snowflakes_n; n++) {
        snowflakeTime[n] += dt;
        let new_pos = snowflakePos[n][1] - controls.snowflake_initial_velocity * snowflakeTime[n] -
          0.5 * controls.gravity * Math.pow(snowflakeTime[n], 2);

        if (new_pos < 10) {
          snowflakeTime[n] = 0;
          snowflakeU[n] = controls.snowflake_initial_velocity;
          snowflakePos[n] = [
            100 - Math.random() * 200,
            400 - Math.random() * 400,
            100 - Math.random() * 200
          ];
        } else {
          snowflakes[n].position.set(
            snowflakePos[n][0] + controls.x_axis_wind_velocity * snowflakeTime[n],
            new_pos,
            snowflakePos[n][2] + controls.z_axis_wind_velocity * snowflakeTime[n]
          );
        }
      }

      ball_time += dt;
      if (ball_y + controls.ball_initial_velocity * Math.cos(Math.PI / 4) * ball_time -
        (0.5 * controls.gravity * Math.pow(ball_time, 2)) < 0) {
        ball_time = 0;
        ball_y = 4;
        ball_z = 77;
      }

      const new_ball_y = ball_y + controls.ball_initial_velocity * Math.cos(Math.PI / 4) * ball_time -
        (0.5 * controls.gravity * Math.pow(ball_time, 2));
      const new_ball_z = ball_z - controls.ball_initial_velocity * Math.sin(Math.PI / 4) * ball_time;
      ball.position.set(0, new_ball_y, new_ball_z);
      ball.scale.setScalar(controls.red_ball_size);
    }

    // Animation loop
    function animate() {
      const dt = clock.getDelta();
      particleDisplacement(dt);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    // Window resize handler
    const handleResize = () => {
      const width = window.innerWidth * 0.75;
      const height = window.innerHeight * 0.75;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Update control values
    sceneRef.current = {
      updateControl: (key: string, value: number) => {
        controls[key as keyof SceneControls] = value;
      },
      cleanup: () => {
        window.removeEventListener('resize', handleResize);
        mountRef.current?.removeChild(renderer.domElement);
        scene.clear();
      }
    };

    animate();

    return () => {
      if (sceneRef.current) {
        sceneRef.current.cleanup();
      }
    };
  }, []);

  return (
    <div className="space-y-8">
      <div className="w-full flex justify-center">
        <div ref={mountRef} className="rounded-lg overflow-hidden shadow-2xl" />
      </div>
      <SnowlandControls 
        controls={controls}
        onChange={handleControlChange}
      />
    </div>
  );
};