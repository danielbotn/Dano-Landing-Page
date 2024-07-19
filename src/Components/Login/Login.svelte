<script lang="ts">
	import type { AuthResponse } from 'src/Models/AuthResponse';
	import Spinner from '../Svgs/Spinner.svelte';
	import DanoLogo from '$lib/images/dano-scaled.png';

	let email: string = '';
	let password: string = '';
	let loginPressed: boolean = false;
	let invalidAuthentication: boolean = true;
	let invalidMessage: string = '';

	const login = async () => {
		loginPressed = true;
		const data: AuthResponse = await getToken(email, password);

		if (data != null) {
			loginPressed = true;
			sessionStorage.setItem('accessToken', data.token);
			sessionStorage.setItem('refreshToken', data.refreshToken);
			console.log('tokens', data);
		}
	};

	const getToken = async (username: string, password: string): Promise<AuthResponse> => {
		const response = await fetch('https://localhost:7145/api/Auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			}),
			mode: 'cors'
		});
		const data = await response.json();
		return data as AuthResponse;
	};
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
		<div class="bg-white dark:bg-gray-900 px-6 py-12 shadow sm:rounded-lg sm:px-12">
			<div class="sm:mx-auto sm:w-full sm:max-w-md">
				<img class="mx-auto h-10 w-auto" src={DanoLogo} alt="Your Company" />
			</div>
			<form class="space-y-6">
				<div>
					<label
						for="email"
						class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
						>Email address</label
					>
					<div class="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							bind:value={email}
						/>
					</div>
				</div>

				<div>
					<label
						for="password"
						class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
						>Password</label
					>
					<div class="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							bind:value={password}
						/>
					</div>
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<input
							id="remember-me"
							name="remember-me"
							type="checkbox"
							class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:text-white"
						/>
						<label
							for="remember-me"
							class="ml-3 block text-sm leading-6 text-gray-900 dark:text-white">Remember me</label
						>
					</div>

					<div class="text-sm leading-6">
						<a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-white"
							>Forgot password?</a
						>
					</div>
				</div>
				{#if !invalidAuthentication}
					<p class="text-red-500 text-xs italic">{invalidMessage}</p>
				{/if}
				<div>
					<button
						on:click={login}
						type="submit"
						class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						{#if loginPressed}
							<Spinner />
						{/if}
						{#if !loginPressed}
							Sign in
						{/if}
					</button>
				</div>
			</form>

			<div>
				<div class="relative mt-10">
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="w-full" />
					</div>
					<div class="relative flex justify-center text-sm font-medium leading-6">
						<span class="bg-white dark:bg-gray-900 px-6 text-gray-900 dark:text-white"
							>Or continue with</span
						>
					</div>
				</div>

				<div class="mt-6 grid grid-cols-2 gap-4">
					<!-- SVG part goes here -->
					<a
						href="#"
						class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
					>
						<!-- SVG -->
						<span class="text-sm font-semibold leading-6">Google</span>
					</a>

					<a
						href="#"
						class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
					>
						<!-- SVG -->
						<span class="text-sm font-semibold leading-6">GitHub</span>
					</a>
				</div>
			</div>
		</div>

		<p class="mt-10 text-center text-sm text-gray-500 dark:text-gray-300">
			Not a member?
			<a
				href="#"
				class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-white dark:hover:text-gray-200"
				>Start a 14 day free trial</a
			>
		</p>
	</div>
</div>
