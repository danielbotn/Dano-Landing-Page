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

        // Space background with diverse stars
        const starCount = 10000;
        const starPositions = new Array(starCount * 3);
        const starColors = [];
        const colorOptions = [
            new THREE.Color(0x888888), // Default gray
            new THREE.Color(0x88ccff), // Blueish
            new THREE.Color(0xffcc88), // Yellowish
            new THREE.Color(0xff8888)  // Reddish
        ];

        for (let i = 0; i < starCount; i++) {
            const x = THREE.MathUtils.randFloatSpread(2000);
            const y = THREE.MathUtils.randFloatSpread(2000);
            const z = THREE.MathUtils.randFloatSpread(2000);

            starPositions[i * 3] = x;
            starPositions[i * 3 + 1] = y;
            starPositions[i * 3 + 2] = z;

            // Apply colors to a small percentage of stars
            if (Math.random() < 0.2) { // 20% chance for colored stars
                const color = colorOptions[Math.floor(Math.random() * (colorOptions.length - 1)) + 1];
                starColors.push(color.r, color.g, color.b);
            } else {
                starColors.push(0.533, 0.533, 0.533); // Majority of stars will be gray
            }
        }

        const starsGeometry = new THREE.BufferGeometry();
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
        starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));

        const starsMaterial = new THREE.PointsMaterial({ 
            vertexColors: true, 
            size: 1.0 
        });

        const starField = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starField);

        // Create blinking stars
        const blinkingStars = [];
        for (let i = 0; i < 50; i++) { // Add 50 blinking stars
            const blinkGeometry = new THREE.BufferGeometry();
            const blinkStarPositions = [
                THREE.MathUtils.randFloatSpread(2000),
                THREE.MathUtils.randFloatSpread(2000),
                THREE.MathUtils.randFloatSpread(2000)
            ];
            blinkGeometry.setAttribute('position', new THREE.Float32BufferAttribute(blinkStarPositions, 3));

            const blinkMaterial = new THREE.PointsMaterial({ 
                color: 0xffffff, 
                size: 2.0, 
                transparent: true, 
                opacity: Math.random() 
            });

            const blinkingStar = new THREE.Points(blinkGeometry, blinkMaterial);
            scene.add(blinkingStar);
            blinkingStars.push(blinkMaterial);
        }

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);

            // Rotate the star field
            starField.rotation.x += 0.0001;
            starField.rotation.y += 0.0001;

            // Update blinking stars' opacity
            blinkingStars.forEach(star => {
                star.opacity += (Math.random() - 0.5) * 0.02;
                if (star.opacity < 0.2) star.opacity = 0.2;
                if (star.opacity > 1.0) star.opacity = 1.0;
            });

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
