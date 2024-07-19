<script>
	import Integrations from '../Components/Integrations/Integrations.svelte';
	import Awesome from '../Components/Awesome/Awesome.svelte';
	import Features from '../Components/Features/Features.svelte';
	import Hero from '../Components/Hero/Hero.svelte';
	import Platforms from '../Components/Platforms/Platforms.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- <Login /> -->
<Hero />
<Features />
<Awesome />
<div class="pt-4">
	<Integrations />
</div>
<Platforms />
<!--Footer-->
<div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
	<a class="text-gray-500 no-underline hover:no-underline" href="#">&copy; App 2019</a>
</div>
