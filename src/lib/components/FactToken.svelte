<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let intervalId: number;

	// Remove the Spline logo from the viewer
	onMount(() => {
		intervalId = setInterval(() => {
			const viewer = document.querySelector('spline-viewer');
			if (viewer && viewer.shadowRoot) {
				const logo = viewer.shadowRoot.querySelector('#logo') as HTMLElement;
				if (logo) {
					logo.style.display = 'none';
				}
			}
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<div class="w-72 h-80 pointer-events-none sm:pointer-events-auto">
	<spline-viewer url="https://prod.spline.design/BzcpAy4Szd2x7KC9/scene.splinecode"></spline-viewer>
</div>
