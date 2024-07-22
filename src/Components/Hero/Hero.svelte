<script>
	import AppStoreImage from '$lib/images/app-store-image.svg';
	import PlayeStoreImage from '$lib/images/play-store-image.svg';
	import Carousel from './Carousel.svelte';
</script>

<div>
	<!--Main-->
	<div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
		<!--Left Col-->
		<div
			class="flex flex-col w-full xl:w-3/5 justify-center items-center md:items-start overflow-y-hidden"
		>
			<h1
				class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center md:text-left px-4 md:px-0"
			>
				<div class="block xl:inline pr-0 md:pr-6 dark:text-white">Dano</div>
				<div class="block text-green-500 dark:text-logoDark xl:inline">
					Your Digital foosball tracker for all your soccer table classics.
				</div>
			</h1>
			<p
				class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle dark:text-white px-4 md:px-0"
			>
				Track matches, create leagues, and dominate the table - now with Slack integration for 1v1
				and 2v2 games
			</p>
			<p
				class="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in dark:text-white"
			>
				Download our app:
			</p>
			<div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
				<img src={AppStoreImage} class="h-12 pr-4 bounce-top-icons" alt="App Store" />
				<img src={PlayeStoreImage} class="h-12 bounce-top-icons" alt="Google Play Store" />
			</div>
		</div>
		<!--Right Col-->
		<div class="w-full xl:w-2/5 py-6 overflow-y-hidden flex justify-center">
			<Carousel />
		</div>
	</div>
</div>

<style>
	.text-logo-color {
		color: #FF4B4B; /* Replace with your exact color code */
	}
</style>