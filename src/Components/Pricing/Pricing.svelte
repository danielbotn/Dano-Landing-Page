<script>
	import { themeStore } from '$lib/stores/themeStore';
	import buyMeCoffeeImage from '$lib/images/buy_me_a_coffee.png';
	import Card from './Card.svelte';
  
	const freeFeatures = [
	  'Unlimited games',
	  '4 Players',
	  '2 Leagues'
	];
  
	const premiumFeatures = [
	  'All Free features',
	  'Unlimited Players',
	  'Unlimited Leagues',
	  'Advanced statistics',
	  'Priority support'
	];
  
	const coffeeFeatures = [
	  'All free features',
	  'Supporter badge',
	  'Early access to new features'
	];
  </script>
  
  <section class="py-16 px-4 md:px-8 bg-gray-100 dark:bg-[#0f172a] text-white">
	<div class="max-w-5xl mx-auto text-center">
	  <h2 class="integration-title">
		<span class="text-green-500">Your Game, Your Support</span>
		<span class={$themeStore === 'dark' ? 'text-white' : 'text-gray-900'}>
		  Enjoy our app for free, upgrade for more, or fuel our passion with a coffee!
		</span>
	  </h2>
  
	  <div class="flex flex-col md:flex-row justify-center items-stretch gap-8">
		<Card
		  title="Free Forever."
		  description="Basic access to features"
		  features={freeFeatures}
		  buttonText="Download Now"
		  lightBgColor="bg-white"
		  darkBgColor="bg-[#1e293b]"
		  lightTextColor="text-gray-900"
		  darkTextColor="text-white"
		  accentColor="text-green-500"
		  borderColor="border-green-500"
		  buttonColor="bg-green-500"
		  buttonHoverColor="hover:bg-green-600"
		/>
  
		<Card
		  title="Premium"
		  description="Full access to all features"
		  features={premiumFeatures}
		  buttonText="Upgrade to Premium"
		  lightBgColor="bg-[#fffad1]"
		  darkBgColor="bg-[#fffad1]"
		  lightTextColor="text-[#4B3621]"
		  darkTextColor="text-[#4B3621]"
		  accentColor="text-[#B8860B]"
		  borderColor="border-[#B8860B]"
		  buttonColor="bg-[#FFDE00]"
		  buttonHoverColor="hover:bg-[#9B7506]"
		  isFeature={true}
		  buttonTextColor="text-black"
		/>
  
		<Card
		  title="Buy Me a Coffee"
		  description="Support the developer with a small donation"
		  features={coffeeFeatures}
		  buttonText="Buy Me a Coffee"
		  lightBgColor="bg-[#6F4E37]"
		  darkBgColor="bg-[#6F4E37]"
		  lightTextColor="text-gray-300"
		  darkTextColor="text-gray-300"
		  accentColor="text-yellow-400"
		  borderColor="border-yellow-400"
		  buttonColor="bg-yellow-400"
		  buttonHoverColor="hover:bg-yellow-500"
		  isFeature={true}
		  image={buyMeCoffeeImage}
		/>
	  </div>
	</div>
  </section>
  
  <style>
	.integration-title {
	  @apply text-4xl md:text-5xl font-extrabold text-center mb-16;
	}
  </style>