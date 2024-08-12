<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import starTexture from '$lib/images/star.png';

    let container;

    onMount(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Create the star field
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 3000; // Reduced the number of stars
        const starVertices = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
            starVertices[i * 3] = Math.random() * 600 - 300; // X position
            starVertices[i * 3 + 1] = Math.random() * 600 - 300; // Y position
            starVertices[i * 3 + 2] = Math.random() * 800 - 500; // Z position, adjusted to start stars further back
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3));

        const starMaterial = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.7, // Size of the stars
            map: new THREE.TextureLoader().load(starTexture),
            transparent: true
        });

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        const speed = 0.1; // Slower speed of stars moving towards the camera

        function animate() {
            const positions = starGeometry.attributes.position.array;

            for (let i = 0; i < starCount; i++) {
                positions[i * 3 + 2] += speed; // Move stars towards the camera

                // If a star passes the camera, reset its position to far away
                if (positions[i * 3 + 2] > camera.position.z) {
                    positions[i * 3 + 2] = -500;
                    positions[i * 3] = Math.random() * 600 - 300; // Randomize X position
                    positions[i * 3 + 1] = Math.random() * 600 - 300; // Randomize Y position
                }
            }

            starGeometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        animate();

        // Handle window resize
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    });
</script>

<div bind:this={container}></div>

<style>
    div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
</style>
