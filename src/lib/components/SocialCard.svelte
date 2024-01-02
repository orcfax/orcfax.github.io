<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import OpenLink from '$lib/components/icons/OpenLink.svelte';

	export let socialCard: {
		title: string;
		description: string;
		image: string;
		altText: string;
		url: string;
	};
</script>

<Link class="" href={socialCard.url} isNewTab>
	<li class="flex flex-col items-center bg-card w-64 shadow-md rounded-3xl p-6">
		<h3 class="text-xl">{socialCard.title}</h3>
		<img class="w-20 h-20" src={socialCard.image} alt={socialCard.altText} />
		<p>{socialCard.description}</p>
		<OpenLink strokeColor="stroke-secondary fill-primary" />
	</li>
</Link>
