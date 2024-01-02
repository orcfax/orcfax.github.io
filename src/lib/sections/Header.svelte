<script>
	import { base } from '$app/paths';
	import Link from '$lib/components/Link.svelte';
	import OpenLink from '$lib/components/icons/OpenLink.svelte';

	const navItems = [
		{
			name: 'Features',
			href: '#features'
		},
		{
			name: 'Token',
			href: '#token'
		},
		{
			name: 'Team',
			href: '#team'
		},
		{
			name: 'Connect',
			href: '#connect'
		},
		{
			name: 'Docs',
			href: 'https://docs.orcfax.io',
			isExernalLink: true
		},
		{
			name: 'Explorer',
			href: 'https://explorer.orcfax.io',
			isExernalLink: true
		}
	];

	let menuOpen = false;
</script>

<header class="absolute z-1 top-0 left-0 flex w-full justify-between">
	<a href="https://orcfax.io" class="transform hover:rotate-[-30]">
		<img
			src={`${base}/echo.svg`}
			class="w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem] transform transition ease-in-out duration-300 delay-150 hover:-rotate-45"
			alt="The Orcfax Logo and Mascot, Echo, a black and white Orca."
		/>
	</a>
	<nav class="font-semibold">
		<div class="hidden md:flex gap-7 pr-9 pt-9 h-min">
			{#each navItems as navItem}
				{#if navItem.isExernalLink}
					<Link
						class="flex gap-1 h-min items-center text-xl hover:underline "
						href={navItem.href}
						isNewTab
					>
						<span>{navItem.name}</span>
						<OpenLink strokeColor="stroke-secondary fill-primary" />
					</Link>
				{:else}
					<Link class="text-xl hover:underline" href={navItem.href}>{navItem.name}</Link>
				{/if}
			{/each}
		</div>

		<div class="flex md:hidden">
			<button
				on:click={() => (menuOpen = !menuOpen)}
				type="button"
				class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
				aria-controls="mobile-menu"
				aria-expanded="false"
			>
				<span class="absolute -inset-0.5"></span>
				<span class="sr-only">Open main menu</span>

				<svg
					class={`${menuOpen ? 'hidden' : 'block'} h-12 w-12`}
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>

				<svg
					class={`${menuOpen ? 'block' : 'hidden'} h-12 w-12 relative z-20`}
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			{#if menuOpen}
				<div
					class="w-screen h-screen bg-primary absolute top-0 left-0 z-10 pt-20 md:hidden"
					id="mobile-menu"
				>
					<div class="flex flex-col justify-center items-center gap-8 pb-3 pt-2 w-full">
						{#each navItems as navItem}
							{#if navItem.isExernalLink}
								<Link
									on:click={() => (menuOpen = false)}
									class="flex gap-1 h-min items-center text-xl hover:underline "
									href={navItem.href}
									isNewTab
								>
									<span>{navItem.name}</span>
									<OpenLink strokeColor="stroke-secondary fill-primary" />
								</Link>
							{:else}
								<Link
									on:click={() => (menuOpen = false)}
									class="text-xl hover:underline"
									href={navItem.href}>{navItem.name}</Link
								>
							{/if}
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</nav>
</header>
