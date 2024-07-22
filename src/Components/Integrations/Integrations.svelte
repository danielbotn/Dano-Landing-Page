<script>
	import { themeStore } from '$lib/stores/themeStore';
	import slackLeagueDark from '$lib/images/slack_single_dark_mode.png';

	import discordLeagueDark from '$lib/images/discord_league.png';
	import discordMatchDark from '$lib/images/discord_match.png';
	import slackLeagueLight from '$lib/images/slack_single_light_mode.png';
	import discordLeagueLight from '$lib/images/discord_league_light_mode.png';
	import discordMatchLight from '$lib/images/discord_match_light_mode.png';
	import slackLogo from '$lib/images/slack_logo.png';
	import discordLogo from '$lib/images/discord_logo.png';

	let hoveredIndex = -1;

	const integrations = [
		{
			darkImg: slackLeagueDark,
			lightImg: slackLeagueLight,
			title: 'Slack League Updates',
			desc: 'Automatic standings in your channels'
		},
		{
			darkImg: discordLeagueDark,
			lightImg: discordLeagueLight,
			title: 'Discord League Management',
			desc: 'Run tournaments via Discord commands'
		},
		{
			darkImg: discordMatchDark,
			lightImg: discordMatchLight,
			title: 'Real-time Match Reporting',
			desc: 'Instant results and leaderboard updates'
		}
	];
</script>

<div
	class="integration-container"
	class:dark-mode={$themeStore === 'dark'}
	class:light-mode={$themeStore === 'light'}
>
	<h2 class="integration-title">
		<span class="text-green-500 dark:text-logoDark">Slack and Discord integrations:</span>
		<span class={$themeStore === 'dark' ? 'text-white' : 'text-gray-900'}
			>Never miss an important foosball world event</span
		>
	</h2>

	<div class="logo-container">
		<img src={slackLogo} alt="Slack Logo" class="integration-logo slack-logo" />
		<img src={discordLogo} alt="Discord Logo" class="integration-logo discord-logo" />
	</div>

	<div class="integration-showcase">
		{#each integrations as item, index}
			<div
				class="integration-item"
				on:mouseenter={() => (hoveredIndex = index)}
				on:mouseleave={() => (hoveredIndex = -1)}
			>
				<img
					src={$themeStore === 'dark' ? item.darkImg : item.lightImg}
					alt={item.title}
					class="integration-image"
				/>
				<div class="integration-info" class:show={hoveredIndex === index}>
					<h3>{item.title}</h3>
					<p>{item.desc}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.integration-container {
		@apply w-full py-16 px-4;
	}
	.integration-container.light-mode {
		@apply bg-white;
	}
	.integration-container.dark-mode {
		@apply bg-black;
	}

	.integration-title {
		@apply text-4xl md:text-5xl font-extrabold text-center mb-16;
	}

	.integration-showcase {
		@apply flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0;
	}

	.integration-item {
		@apply relative flex flex-col items-center;
	}

	.integration-image {
		@apply w-64 md:w-80 h-auto rounded-lg shadow-lg transition-all duration-300;
	}

	.integration-item:hover .integration-image {
		@apply scale-105;
	}

	.integration-info {
		@apply absolute bottom-0 left-0 right-0 p-4 rounded-b-lg
               opacity-0 transition-all duration-300 text-center;
	}
	.light-mode .integration-info {
		@apply bg-gray-100 bg-opacity-90;
	}
	.dark-mode .integration-info {
		@apply bg-gray-800 bg-opacity-90;
	}

	.integration-info.show {
		@apply opacity-100;
	}

	.integration-info h3 {
    @apply text-lg font-semibold mb-2;
	}

	.light-mode .integration-info h3 {
		@apply text-green-500;
	}

	.dark-mode .integration-info h3 {
		@apply text-white;
	}

	.integration-info p {
		@apply text-sm;
	}
	.light-mode .integration-info p {
		@apply text-gray-800;
	}
	.dark-mode .integration-info p {
		@apply text-white;
	}

	@media (max-width: 768px) {
		.integration-info {
			@apply static mt-4 opacity-100 rounded-lg;
		}
		.light-mode .integration-info {
			@apply bg-gray-100;
		}
		.dark-mode .integration-info {
			@apply bg-gray-800;
		}
	}

	.logo-container {
		@apply flex justify-center items-center mb-12 relative;
	}

	.integration-logo {
		@apply w-16 h-16 object-contain mx-4 transition-all duration-300;
		animation: float 3s ease-in-out infinite;
	}

	.slack-logo {
		animation-delay: 0.5s;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}

	.logo-container:hover .integration-logo {
		animation: pulse 0.5s ease-in-out infinite;
	}
</style>
