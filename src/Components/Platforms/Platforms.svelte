<script>
	import { themeStore } from '$lib/stores/themeStore';
	import windowsDark from '$lib/images/windows_dark_mode.png';
	import windowsLight from '$lib/images/windows_light_mode.png';
	import macOSDark from '$lib/images/mac_os_dark_mode.png';
	import macOSLight from '$lib/images/mac_os_light_mode.png';
	import linuxDark from '$lib/images/linux_dark_mode.png';
	import linuxLight from '$lib/images/linux_light_mode.png';
	import androidDark from '$lib/images/android_dark_mode.png';
	import androidLight from '$lib/images/android_light_mode.png';
	import iOS from '$lib/images/ios_dark_mode.png';
	import iOSLightMode from '$lib/images/ios_ligh_mode.png';
	import chromeLightMode from '$lib/images/chrome_light_mode.png';
	import chromeDarkMode from '$lib/images/chrome_dark_mode.png';

	const platforms = [
		{
			darkImg: androidDark,
			lightImg: androidLight,
			title: 'Android',
			desc: 'Take your foosball game on the go with our feature-rich Android app'
		},
		{
			darkImg: iOS,
			lightImg: iOSLightMode,
			title: 'iOS',
			desc: 'Enjoy seamless foosball management on your iPhone or iPad'
		},
		{
			darkImg: windowsDark,
			lightImg: windowsLight,
			title: 'Windows',
			desc: 'Manage your leagues and tournaments from your Windows PC'
		},
		{
			darkImg: macOSDark,
			lightImg: macOSLight,
			title: 'macOS',
			desc: 'Experience smooth foosball tracking on your Mac'
		},
		{
			darkImg: linuxDark,
			lightImg: linuxLight,
			title: 'Linux',
			desc: 'Full functionality for the open-source enthusiasts'
		},
		{
			darkImg: chromeDarkMode,
			lightImg: chromeLightMode,
			title: 'Chrome',
			desc: 'Full functionality for the open-source enthusiasts'
		}
	];
</script>

<div class="platforms-container">
	<h2 class="platforms-title">
		<span class="text-green-500 dark:text-logoDark">Foosball Everywhere:</span>
		<span class={$themeStore === 'dark' ? 'text-white' : 'text-gray-900'}>
			Your Game, Any Platform, Any Device
		</span>
	</h2>

	<p class="text-xl text-center mb-8 text-gray-600 dark:text-gray-300">
		From pocket to desktop, Dano Foosball fits perfectly into your digital life. Available on iOS,
		Android, Desktop (Winsow, MacOS, Linux) and your favourite browser
	</p>

	<div class="platforms-showcase">
		{#each platforms as platform}
			<div class="platform-item">
				<img
					src={$themeStore === 'dark' ? platform.lightImg : platform.darkImg}
					alt={platform.title}
					class="platform-image"
				/>
				<h3 class="text-gray-600 dark:text-gray-300">{platform.title}</h3>
			</div>
		{/each}
	</div>
</div>

<style>
	.platforms-container {
		width: 100%;
		padding: 4rem 1rem;
		background-color: var(--bg-color);
		color: var(--text-color);
	}
	.platforms-container.light-mode {
		--bg-color: white;
		--text-color: #333;
	}

	.platforms-title {
		font-size: 2.5rem;
		font-weight: 800;
		text-align: center;
		margin-bottom: 1rem;
	}

	.platforms-subtitle {
		font-size: 1.25rem;
		text-align: center;
		margin-bottom: 2rem;
		color: var(--subtitle-color);
	}
	.platforms-container.light-mode .platforms-subtitle {
		--subtitle-color: #555;
	}
	.platforms-container.dark-mode .platforms-subtitle {
		--subtitle-color: #ccc;
	}

	.platforms-showcase {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.platform-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.platform-image {
		width: 80px;
		height: 80px;
		margin-bottom: 0.5rem;
	}
</style>
