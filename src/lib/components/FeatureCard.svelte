<script lang="ts">
	interface Props {
		title: string;
		description: string;
		image: string;
		altText: string;
	}

	let {
		title,
		description,
		image,
		altText
	}: Props = $props();
</script>

<li
	class="flex flex-col gap-4 w-full border-b border-gray-300 rounded-3xl bg-card p-6 sm:p-10 shadow-md"
>
	<h3 class="font-extrabold text-2xl sm:text-4xl font-mulish">{title}</h3>
	<p class="text-base">{description}</p>
	<img class="w-full h-28 sm:h-64 object-cover rounded-2xl grayscale" src={image} alt={altText} />
</li>
