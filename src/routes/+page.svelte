<script lang="ts">
	import Hero from '$lib/sections/Hero.svelte';
	import Team from '$lib/sections/Team.svelte';
	import Token from '$lib/sections/Token.svelte';
	import About from '$lib/sections/About.svelte';
	import Connect from '$lib/sections/Connect.svelte';
	import Features from '$lib/sections/Features.svelte';
	import Waves from '$lib/components/Waves.svelte';
</script>

<div class="flex flex-col justify-center items-center text-2xl overflow-hidden">
	<div
		class="flex flex-col h-screen bg-gradient-to-b from-primary to-accentLight justify-between items-center"
	>
		<Hero />
		<Waves />
	</div>
	<About />
	<Features />
	<Token />
	<Team />
	<Connect />
</div>
