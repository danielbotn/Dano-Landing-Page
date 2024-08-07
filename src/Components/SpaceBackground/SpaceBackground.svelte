<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';

    let container;

    onMount(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Space background
        const stars = new Array(10000);
        for (let i = 0; i < 10000; i++) {
            const x = THREE.MathUtils.randFloatSpread(2000);
            const y = THREE.MathUtils.randFloatSpread(2000);
            const z = THREE.MathUtils.randFloatSpread(2000);
            stars.push(x, y, z);
        }

        const starsGeometry = new THREE.BufferGeometry();
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(stars, 3));

        const starsMaterial = new THREE.PointsMaterial({ color: 0x888888 });
        const starField = new THREE.Points(starsGeometry, starsMaterial);

        scene.add(starField);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            
            // Add rotation for star field animation
            starField.rotation.x += 0.0001; // slower rotation on the x-axis
            starField.rotation.y += 0.0001; // slower rotation on the y-axis

            renderer.render(scene, camera);
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
