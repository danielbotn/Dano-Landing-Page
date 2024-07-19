<script lang="ts">
	import { page } from '$app/stores';

	const id = $page.params.id;

	async function decryptString(encryptedText: string) {
		const encryptedBuffer = Uint8Array.from(atob(encryptedText), (c) => c.charCodeAt(0));

		const iv = encryptedBuffer.slice(0, 16); // Extract IV
		const encryptedContent = encryptedBuffer.slice(16); // Extract encrypted content

		const key = await crypto.subtle.importKey(
			'raw',
			new TextEncoder().encode('YourEncryptionKey1234567890'),
			{ name: 'AES-CBC', length: 256 },
			false,
			['decrypt']
		);

		const decryptedContent = await crypto.subtle.decrypt(
			{ name: 'AES-CBC', iv },
			key,
			encryptedContent
		);

		return new TextDecoder().decode(decryptedContent);
	}
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<img
			class="mx-auto h-10 w-auto"
			src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
			alt="Your Company"
		/>
		<h2
			class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white"
		>
			New password
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
		<div class="bg-white dark:bg-gray-900 px-6 py-12 shadow sm:rounded-lg sm:px-12">
			<form class="space-y-6" action="#" method="POST">
				<div>
					<label
						for="password"
						class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
						>Create your Password</label
					>
					<div class="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<label
						for="password"
						class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
						>Password Again</label
					>
					<div class="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Change</button
					>
				</div>
			</form>
		</div>
	</div>
</div>
