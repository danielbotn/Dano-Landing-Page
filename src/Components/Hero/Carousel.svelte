<script>
	import { Carousel } from 'flowbite-svelte';
	import { themeStore } from '$lib/stores/themeStore';
	import dashboardDarkMode from '$lib/images/dashboard_phone_scaled_correct_now_2.png';
	import newMatchDarkMode from '$lib/images/new_match.png';
	import ongoingMatchDarkMode from '$lib/images/ongoing_match.png';
	import dashboardLightMode from '$lib/images/dashboard_light_mode.png';
	import newMatchLightMode from '$lib/images/new_match_light_mode.png';
	import ongoingGameLightMode from '$lib/images/ongoing_match_light_mode.png';

	$: images = [
		{
			id: 0,
			name: 'Dashboard',
			imgurl: $themeStore === 'dark' ? dashboardDarkMode : dashboardLightMode,
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		},
		{
			id: 1,
			name: 'New Match',
			imgurl: $themeStore === 'dark' ? newMatchDarkMode : newMatchLightMode,
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
		},
		{
			id: 2,
			name: 'Ongoing Match',
			imgurl: $themeStore === 'dark' ? ongoingMatchDarkMode : ongoingGameLightMode,
			attribution: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
		}
	];

	let showThumbs = false;
	let showCaptions = false;
	let slideControls = false;
</script>

<Carousel {images} loop {showCaptions} {showThumbs} duration={3000} {slideControls} divClass="" />
