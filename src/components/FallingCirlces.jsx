import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function Circle({ texturePath, link }) {
    const [velocity, setVelocity] = useState(new THREE.Vector3(0, -0.02, 0));
    const [gravity, setGravity] = useState(new THREE.Vector3(0, -0.001, 0));
    const texture = useLoader(TextureLoader, texturePath);
    const ref = useRef();

    useFrame(() => {
        if (ref.current) {
            ref.current.position.add(velocity);
            setVelocity(velocity.add(gravity));

            // Bounce off the boundaries
            if (ref.current.position.y < -1.5 || ref.current.position.y > 1.5) {
                setVelocity(new THREE.Vector3(velocity.x, -velocity.y, velocity.z));
            }
            if (ref.current.position.x < -1.5 || ref.current.position.x > 1.5) {
                setVelocity(new THREE.Vector3(-velocity.x, velocity.y, velocity.z));
            }
        }
    });

    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <mesh ref={ref} position={[Math.random() * 2 - 1, 1.5, 0]} onClick={handleClick}>
            <circleGeometry args={[0.1, 32]} />
            <meshBasicMaterial map={texture} />
        </mesh>
    );
}

function FallingCircles() {
    return (
        <Canvas>
            {/* <Circle texturePath="/path/to/texture1.jpg" link="https://example.com/link1" />
            <Circle texturePath="/path/to/texture2.jpg" link="https://example.com/link2" />
            <Circle texturePath="/path/to/texture3.jpg" link="https://example.com/link3" /> */}
            {/* Add more circles as needed */}
        </Canvas>
    );
}

export default FallingCircles;
