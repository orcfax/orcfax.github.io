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
      await app.load(`${base}/validator-license-nft.splinecode`);
    })();

    return () => {
      isDisposed = true;
      app?.dispose?.();
    };
  });
</script>

<div
  id="validator-license-container"
  class="z-0 w-60 h-96 pointer-events-none sm:pointer-events-auto relative"
>
  <canvas id="validator-license" bind:this={canvas} class="w-full h-full"
  ></canvas>
</div>
