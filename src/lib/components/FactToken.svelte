<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  let canvas: HTMLCanvasElement | null = null;
  type SplineApp = import("@splinetool/runtime").Application;

  let app: SplineApp | null = null;

  onMount(() => {
    let isDisposed = false;

    (async () => {
      if (!canvas) return;
      const { Application } = await import("@splinetool/runtime");
      if (isDisposed) return;
      app = new Application(canvas);
      await app.load(`${base}/token.splinecode`);
    })();

    return () => {
      isDisposed = true;
      app?.dispose?.();
    };
  });
</script>

<div
  id="fact-token-container"
  class="w-48 h-52 pointer-events-none sm:pointer-events-auto mt-8 relative"
>
  <canvas id="fact-token" bind:this={canvas} class="w-full h-full"></canvas>
</div>
