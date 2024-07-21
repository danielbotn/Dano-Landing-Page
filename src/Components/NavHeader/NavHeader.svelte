<script>
    import DanoLogo from '$lib/images/dano-scaled.png';
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
</script>

<header
    class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 dark:bg-black  border-gray-200 dark:border-gray-600"
>
    <div class="flex-1 flex justify-between items-center">
        <img src={DanoLogo} class="h-20 pt-6" alt="Dano Logo" />
        
        <span
            on:click={handleDarkModeClick}
            on:keydown={(e) => e.key === 'Enter' && handleDarkModeClick()}
            tabindex="0"
            role="button"
        >
            <DarkMode class={btnClass} storage="local" />
        </span>
    </div>
</header>