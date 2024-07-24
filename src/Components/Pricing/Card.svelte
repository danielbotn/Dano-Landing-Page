<script>
    export let title = "";
    export let description = "";
    export let features = [];
    export let buttonText = "";
    export let buttonAction = () => {};
    export let lightBgColor = "bg-white";
    export let darkBgColor = "bg-gray-800";
    export let lightTextColor = "text-gray-900";
    export let darkTextColor = "text-white";
    export let accentColor = "text-blue-500";
    export let borderColor = "border-blue-500";
    export let buttonColor = "bg-blue-500";
    export let buttonHoverColor = "hover:bg-blue-600";
    export let isFeature = false;
    export let image = null;
  </script>
  
  <div
    class="{lightBgColor} {darkBgColor} rounded-lg shadow-lg p-8 flex flex-col justify-between border-t-4 {borderColor} flex-1 {isFeature ? 'transform hover:scale-105 transition duration-300' : ''}"
  >
    <div>
      {#if image}
        <img src={image} alt={title} class="w-16 h-16 mx-auto mb-4" />
      {/if}
      <h3 class="text-2xl font-semibold mb-4 {lightTextColor} {darkTextColor}">{title}</h3>
      <p class="{lightTextColor} {darkTextColor} mb-6">{description}</p>
      <ul class="text-left space-y-2 mb-8 {lightTextColor} {darkTextColor}">
        {#each features as feature}
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-2 {accentColor}" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            {feature}
          </li>
        {/each}
      </ul>
    </div>
    <button
      on:click={buttonAction}
      class="{buttonColor} text-white font-semibold py-2 px-4 rounded-lg {buttonHoverColor} transition duration-300"
    >
      {buttonText}
    </button>
  </div>