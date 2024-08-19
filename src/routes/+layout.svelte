<script>
	import Pricing from '../Components/Pricing/Pricing.svelte';
	import '../app.postcss';
	import NavHeader from '../Components/NavHeader/NavHeader.svelte';
	import SpaceBackground from '../Components/SpaceBackground/SpaceBackground.svelte';
	import SpaceBackgroundTwo from '../Components/SpaceBackground/SpaceBackgroundTwo.svelte';
	import SpaceBackgroundThree from '../Components/SpaceBackground/SpaceBackgroundThree.svelte';
	import SpaceBackgroundFour from '../Components/SpaceBackground/SpaceBackgroundFour.svelte';
	import { themeStore } from '$lib/stores/themeStore';
	import './styles.css';

	export const prerender = true;

	// Array of background components
	const backgrounds = [SpaceBackground, SpaceBackgroundTwo, SpaceBackgroundThree, SpaceBackgroundFour];

	// Reactive declaration to pick a random background
	let SelectedBackground;
	$: if ($themeStore === 'dark') {
		SelectedBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
	}
</script>

<div class="app">
	<NavHeader />

	<main>
		{#if $themeStore === 'dark'}
			<svelte:component this={SelectedBackground} />
		{/if}
		<slot />
	</main>

	<Pricing />
	<!--Footer-->
	<div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
		<!-- todo -->
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
