
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FullScreenThreeJS = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add the renderer to the DOM
    mountRef.current.appendChild(renderer.domElement);

    // Set the camera position
    camera.position.z = 1;

    // Create a bounding box for the scene
    const boundingBox = new THREE.Box3().setFromObject(scene);

    console.log("boudning box", boundingBox)

    // Get the size of the bounding box
    const size = new THREE.Vector3();
    renderer.getSize(size);

    const unitX = size.x/size.y; 
    const unitY = size.y/size.x; 

    console.log(size.x, size.x/size.y, window.innerHeight, window.innerHeight/window.innerWidth)

     // Create circles and add them to the scene
     const circleMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
     const numCircles = 10;
     const circles = [];
     const radius = .1;
 
     for (let i = 0; i < numCircles; i++) {
      const geometry = new THREE.CircleGeometry(radius, 32);
      const circle = new THREE.Mesh(geometry, circleMaterial);
       circle.userData.velocity = new THREE.Vector2(Math.random()/10, Math.random()/10); // Initial velocity
       circles.push(circle);
       scene.add(circle);
     }
    
    //  //circle.position.x = aspect-radius;
    //  circle.position.y = unitY/2-radius;

    //  scene.add(circle); 

    // Create the animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;

      // Update circle positions to simulate falling
      circles.forEach(circle => {
        circle.position.x += circle.userData.velocity.x;
        circle.position.y += circle.userData.velocity.y;

        // Collision with top and bottom bounds
        if (circle.position.y + radius > unitY/2 || circle.position.y - radius < -unitY/2) {
          circle.userData.velocity.y *= -1;
        }

        // Collision with left and right bounds
        if (circle.position.x + radius > aspect || circle.position.x - radius < -aspect) {
          circle.userData.velocity.x *= -1;
        }
      });

      // Render the scene
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();

    // Handle window resize
    const handleResize = () => {
      const newAspect = window.innerWidth / window.innerHeight;
      camera.left = -newAspect;
      camera.right = newAspect;
      camera.top = 1;
      camera.bottom = -1;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

function Home() {
  return (
    <div className='w-screen h-screen'>
      <FullScreenThreeJS/>
    </div>
  );
}

export default Home;
