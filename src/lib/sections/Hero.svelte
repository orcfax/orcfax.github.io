<script lang="ts">
	import Link from '$lib/components/Link.svelte';
</script>

<section class="flex flex-col justify-center items-center pt-8 grow">
	<Link
		href="#about"
		class="text-[5rem] xs:text-[6.5rem] sm:text-[8rem] lg:text-[12rem] h-min leading-snug tracking-wide font-black hover:underline"
	>
		Orcfax
	</Link>

	<h2
		class="text-center max-w-xs xs:max-w-sm sm:max-w-md text-xl xs:text-2xl sm:text-3xl lg:text-4xl lg:max-w-lg font-bold"
	>
		Decentralized oracle feeds for Cardano smart contracts
	</h2>
	<div class="flex flex-col items-center pt-12 sm:pt-8 gap-5 sm:gap-8">
		<p class="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-black">$FACT Token is Live!</p>
		<Link
			href="https://app.wingriders.com/pools/026a18d04a0c642759bb3d83b12e3344894e5c1c7b2aeb1a2113a5702b4e632bf755fe5e33309a47216aa396106641edd056423e2ef2a08ce30bb604"
			isNewTab
			isButton
		>
			Liquidity Pool →
		</Link>
	</div>
</section>
