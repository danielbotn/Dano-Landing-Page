<!-- Pricing.svelte -->
<script>
	import { themeStore } from '$lib/stores/themeStore';
	import buyMeCoffeeImage from '$lib/images/buy_me_a_coffee.png';
</script>

<section class="py-16 px-4 md:px-8 bg-gray-100 dark:bg-slate-900 text-white">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="integration-title">
			<span class="text-green-500">Your Game, Your Support</span>
			<span class={$themeStore === 'dark' ? 'text-white' : 'text-gray-900'}
				>Enjoy our app for free, or fuel our passion with a coffee!</span
			>
		</h2>

		<div class="flex flex-col md:flex-row justify-center items-stretch gap-8">
			<!-- Free Tier -->
			<div
				class="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col justify-between border-t-4 border-green-500 flex-1"
			>
				<div>
					<h3 class="text-2xl font-semibold mb-4">Free Forever</h3>
					<p class="text-gray-300 mb-6">Full access to all features</p>
					<ul class="text-left space-y-2 mb-8 text-gray-300">
						<li class="flex items-center">
							<svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Cross-platform support
						</li>
						<li class="flex items-center">
							<svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Unlimited games
						</li>
						<li class="flex items-center">
							<svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Unlimited players
						</li>
						<li class="flex items-center">
							<svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Unlimited leagues
						</li>
						<li class="flex items-center">
							<svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Full feature integration
						</li>
						<li class="flex items-center">
							<svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							And much more
						</li>
					</ul>
				</div>
				<button
					class="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
				>
					Download Now
				</button>
			</div>

			<!-- Buy Me a Coffee -->
			<div
				class="bg-[#6F4E37] rounded-lg shadow-lg p-8 flex flex-col justify-between border-t-4 border-yellow-400 flex-1 transform hover:scale-105 transition duration-300"
			>
				<div>
					<img src={buyMeCoffeeImage} alt="Buy Me a Coffee" class="w-24 h-24 mx-auto mb-4" />
					<h3 class="text-2xl font-semibold mb-4 text-yellow-300">Buy Me a Coffee</h3>
					<p class="text-gray-300 mb-6">Support the developer with a small donation</p>
					<ul class="text-left space-y-2 mb-8 text-gray-300">
						<li class="flex items-center">
							<svg class="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							All free features
						</li>
						<li class="flex items-center">
							<svg class="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Supporter badge
						</li>
						<li class="flex items-center">
							<svg class="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Early access to new features
						</li>
					</ul>
				</div>
				<button
					class="bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300"
				>
					Buy Me a Coffee
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	.integration-title {
		@apply text-4xl md:text-5xl font-extrabold text-center mb-16;
	}
</style>
