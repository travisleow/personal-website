import React, { useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Preload, useProgress } from "@react-three/drei";
import Loader from "@/components/Loader";

const Computers = () => {
    const computer = useGLTF("./pc_model/scene.gltf");

    const [rotation, setRotation] = useState(0);

    useFrame(() => {
        setRotation(rotation => rotation + 0.005); 
    });

    return (
        <mesh rotation-y={rotation}>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
                object={computer.scene}
                scale={4}
                position={[0, -3.25, -1.5]}
            />
        </mesh>
    );
};

const ComputerCanvas = () => {

    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [10, 3, 25], fov: 25, rotation: [30, 5, 0] }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={true}
                    maxPolarAngle={Math.PI}
                    minPolarAngle={0}
                />
                <Computers />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputerCanvas;
