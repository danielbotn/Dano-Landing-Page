<script>
    import DanoLogo from '$lib/images/dano-green-2.png';
	import DanoDark from '$lib/images/dano-scaled.png';
    import { DarkMode } from 'flowbite-svelte';
    import { themeStore } from '$lib/stores/themeStore';
    import { onMount } from 'svelte';

    let btnClass =
        'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';

    const handleDarkModeClick = () => {
        themeStore.toggle();
    };

    onMount(() => {
        themeStore.init();
    });

	// Reactive statement to select the appropriate logo based on the theme
    $: logoSrc = $themeStore === 'dark' ? DanoDark : DanoLogo;
</script>

<div class="shadow-sm">
	<header class="xl:px-96 px-2 bg-white flex flex-wrap items-center lg:py-0 py-2 dark:bg-black border-gray-200 dark:border-gray-600">
		<div class="flex-1 flex justify-between items-center">
			<img src={logoSrc} class="h-20 pt-4 pb-4 ml-2 xl:ml-10 2xl:ml-24" alt="Dano Logo" />
			
			<span
				on:click={handleDarkModeClick}
				on:keydown={(e) => e.key === 'Enter' && handleDarkModeClick()}
				tabindex="0"
				role="button"
				class="mr-2 xl:mr-10 2xl:mr-24"
			>
				<DarkMode class={btnClass} storage="local" />
			</span>
		</div>
	</header>
</div>
