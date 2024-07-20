<script>
	import Integrations from '../Components/Integrations/Integrations.svelte';
	import Awesome from '../Components/Awesome/Awesome.svelte';
	import Features from '../Components/Features/Features.svelte';
	import Hero from '../Components/Hero/Hero.svelte';
	import Platforms from '../Components/Platforms/Platforms.svelte';
	import Pricing from '../Components/Pricing/Pricing.svelte';
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
