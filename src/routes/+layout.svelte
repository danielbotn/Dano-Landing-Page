<script>
	import Pricing from '../Components/Pricing/Pricing.svelte';
	import '../app.postcss';
	import NavHeader from '../Components/NavHeader/NavHeader.svelte';
	import './styles.css';
</script>

<div class="app">
	<NavHeader />

	<main>
		<slot />
	</main>

	<Pricing />
	<!--Footer-->
	<div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
		<a class="text-gray-500 no-underline hover:no-underline" href="#">&copy; App 2019</a>
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
