<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import starTexture from '$lib/images/star.png';

    let container;

    onMount(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 10;
        camera.position.x = 0;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Space background
        const starGeometry = new THREE.BufferGeometry();
        const starVertices = new Float32Array(6000 * 3);

        for (let i = 0; i < 6000; i++) {
            starVertices[i * 3] = Math.random() * 600 - 300;
            starVertices[i * 3 + 1] = Math.random() * 600 - 300;
            starVertices[i * 3 + 2] = Math.random() * 600 - 300;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3));

        const starMaterial = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.5, // Reduced star size
            map: new THREE.TextureLoader().load(starTexture),
            transparent: true
        });

        const stars = new THREE.Points(starGeometry, starMaterial);
        stars.position.z = 0; // Set the initial position of the stars
        scene.add(stars);

        // Slow down the animation
        let speed = 0.03;

        function animate() {
            starGeometry.attributes.position.needsUpdate = true;
            stars.position.z -= speed;

            // Reset the position when the stars go off-screen
            if (stars.position.z < -300) {
                stars.position.z = 300;
            }

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