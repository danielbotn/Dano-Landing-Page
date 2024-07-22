<script lang="ts">
	import { Icon, Users } from 'svelte-hero-icons';
	import { Skull, Dices, Trophy, Slack, FolderClock, Moon, FileCog } from 'lucide-svelte';
	import { themeStore } from '$lib/stores/themeStore';
	$: iconColor = $themeStore == 'dark' ? '#ffffff' : '#000000'; // Adjust these colors as needed
</script>

<div class="container py-20">
	<div class="max-w-4xl mx-auto">
		<!-- Grid -->
		<div class="grid md:grid-cols-2 gap-8 lg:gap-16">
			<div class="space-y-8 lg:space-y-12">
				<!-- Icon Block -->
				<div class="flex items-start">
					<div class="flex-shrink-0 p-2">
						<Dices size={64} color={iconColor} />
					</div>
					<div class="ms-6 sm:ms-8">
						<h3 class="text-base sm:text-lg font-semibold text-green-500 dark:text-white">Flexible Match Modes</h3>
						<p class="mt-1 text-gray-600 dark:text-gray-300">
							Enjoy 1v1 duels or team up for 2v2 matches. Perfect for quick games or strategic team
							play..
						</p>
					</div>
				</div>
				<!-- Icon Block -->
				<div class="flex items-start">
					<div class="flex-shrink-0 p-2">
						<Trophy size={64} color={iconColor} />
					</div>
					<div class="ms-6 sm:ms-8">
						<h3 class="text-base sm:text-lg font-semibold text-green-500 dark:text-white">Competitive Leagues</h3>
						<p class="mt-1 text-gray-600 dark:text-gray-300">
							Join or create leagues to compete with friends or colleagues. Climb the ranks and
							become the foosball champion.
						</p>
					</div>
				</div>
				<!-- Icon Block -->
				<div class="flex items-start">
					<div class="flex-shrink-0 p-2">
						<FolderClock size={64} color={iconColor} />
					</div>
					<div class="ms-6 sm:ms-8">
						<h3 class="text-base sm:text-lg font-semibold text-green-500 dark:text-white">Comprehensive History</h3>
						<p class="mt-1 text-gray-600 dark:text-gray-300">
							Track your progress with detailed match history and statistics. Analyze your
							performance to improve your game.
						</p>
					</div>
				</div>
			</div>
			<!-- End Col -->
			<div class="space-y-8 lg:space-y-12">
				<!-- Icon Block -->
				<div class="flex items-start">
					<div class="flex-shrink-0 p-2">
						<Slack size={64} color={iconColor} />
					</div>
					<div class="ms-6 sm:ms-8">
						<h3 class="text-base sm:text-lg font-semibold text-green-500 dark:text-white">Seamless Integrations</h3>
						<p class="mt-1 text-gray-600 dark:text-gray-300">
							Connect with Slack and Notion to share results, schedule matches, and keep your team
							updated on the latest foosball action.
						</p>
					</div>
				</div>
				<!-- Icon Block -->
				<div class="flex items-start">
					<div class="flex-shrink-0 p-2">
						<Moon size={64} color={iconColor} />
					</div>
					<div class="ms-6 sm:ms-8">
						<h3 class="text-base sm:text-lg font-semibold text-green-500 dark:text-white">Dark Mode</h3>
						<p class="mt-1 text-gray-600 dark:text-gray-300">
							Easy on the eyes with our sleek dark mode. Perfect for late-night foosball strategy
							planning or low-light environments.
						</p>
					</div>
				</div>
				<!-- Icon Block -->
				<div class="flex items-start">
					<div class="flex-shrink-0 p-2">
						<FileCog size={64} color={iconColor} />
					</div>
					<div class="ms-6 sm:ms-8">
						<h3 class="text-base sm:text-lg font-semibold text-green-500 dark:text-white">Customizable Settings</h3>
						<p class="mt-1 text-gray-600 dark:text-gray-300">
							Tailor the app to your preferences. Adjust notifications, match rules, and more to
							create your perfect foosball companion.
						</p>
					</div>
				</div>
			</div>
			<!-- End Col -->
		</div>
		<!-- End Grid -->
	</div>
</div>
