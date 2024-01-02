<script lang="ts">
	export let contentClass = '';
</script>

<section id={$$props.id} class={`flex flex-col items-center w-full ${$$props.class} `}>
	<div class={`flex flex-col gap-8 max-w-4xl lg:max-w-5xl px-12 md:px-16 ${contentClass}`}>
		<slot />
	</div>
</section>
