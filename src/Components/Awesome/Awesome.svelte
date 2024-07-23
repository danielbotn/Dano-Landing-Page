<script>
	import { themeStore } from '$lib/stores/themeStore';
	import historyLightMode from '$lib/images/history_light_mode.png';
	import historyDarkMode from '$lib/images/history_dark_mode-portrait.png';
	import leagueDarkMode from '$lib/images/league_dark_mode-portrait.png';
	import leagueLightMode from '$lib/images/league_light_mode-portrait.png';
	import doubleDarkMode from '$lib/images/double_match_dark_mode-portrait.png';
	import doubleLightMode from '$lib/images/double_match_light_mode.png';
</script>

<div class="container mx-auto px-4 py-4">
	<h2
		class="text-3xl md:text-4xl font-extrabold text-center mb-12 text-green-500 dark:text-logoDark"
	>
		What's Awesome About <span class="text-gray-900 dark:text-white">Dano</span> Foosball?
	</h2>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
	<div class="feature-card">
		<img
			src={$themeStore === 'dark' ? historyDarkMode : historyLightMode}
			alt="Match History"
			class="w-48 h-auto mb-6 mx-auto"
		/>
		<h3 class="text-xl font-bold mb-2 dark:text-white">Comprehensive Match History</h3>
		<p class="text-gray-600 dark:text-gray-300 text-left">
			Keep track of all your foosball games. View detailed match reports, scores, and player
			statistics. Analyze your performance and track your progress over time.
		</p>
	</div>
	<div class="feature-card">
		<img
			src={$themeStore === 'dark' ? leagueDarkMode : leagueLightMode}
			alt="Leagues Dashboard"
			class="w-48 h-auto mb-6 mx-auto"
		/>
		<h3 class="text-xl font-bold mb-2 dark:text-white">Exciting Foosball Leagues</h3>
		<p class="text-gray-600 dark:text-gray-300 text-left">
			Create and manage foosball leagues with ease. Set up tournaments, track standings, and crown
			champions. Perfect for office competitions or friendly rivalries.
		</p>
	</div>
	<div class="feature-card">
		<img
			src={$themeStore === 'dark' ? doubleDarkMode : doubleLightMode}
			alt="Game Modes"
			class="w-48 h-auto mb-6 mx-auto"
		/>
		<h3 class="text-xl font-bold mb-2 dark:text-white">Versatile Game Modes</h3>
		<p class="text-gray-600 dark:text-gray-300 text-left">
			Enjoy both 1vs1 and 2vs2 matches. Challenge a single opponent or team up with a partner for
			thrilling doubles action. Customize game rules to suit your style.
		</p>
	</div>
</div>

<style>
    .feature-card {
        @apply bg-[rgb(248,248,248)] dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:transform hover:scale-105;
    }
    :global(.dark) .feature-card {
        background-color: #0a0a0a; /* darker gray for dark mode */
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
</style>