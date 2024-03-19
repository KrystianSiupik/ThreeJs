// Threes.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
function ThreeDModel() {
    const containerRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        camera.position.set(0, 0, 0);
        scene.add(camera);

        // Dodaj światło
        const ambientLight = new THREE.AmbientLight(0xff00ff, 0.5); // Światło otoczenia
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Kierunkowe światło
        directionalLight.position.set(1,2,3);
        scene.add(directionalLight);
        
        const loader = new GLTFLoader();
        loader.load('/2.gltf', function (gltf) {
            gltf.scene.scale.set(1, 1, 1); // Ustaw skalę, jeśli potrzebujesz
            gltf.scene.position.set(0, 0, 0); // Ustaw pozycję, jeśli potrzebujesz
            scene.add(gltf.scene);
            console.log('Model loaded', gltf);
        });

        camera.position.z = 10;
        renderer.setClearColor(0xff0000); 

        const animate = function () {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        };

        animate();

        return () => {
            // Cleanup
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef}></div>;
}

export { ThreeDModel };
