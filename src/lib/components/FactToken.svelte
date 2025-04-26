<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    let intervalId: number;

    // Remove the Spline logo from the viewer
    onMount(() => {
        intervalId = setInterval(() => {
            const viewer = document.querySelector("#fact-token");
            if (viewer && viewer.shadowRoot) {
                const logo = viewer.shadowRoot.querySelector("#logo") as HTMLElement;
                if (logo) {
                    logo.style.display = "none";
                }
            }
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(intervalId);
    });
</script>

<div class="w-48 h-52 pointer-events-none sm:pointer-events-auto mt-8">
    <spline-viewer
        id="fact-token"
        url="https://prod.spline.design/YkOetzPdSoEqtenO/scene.splinecode"
    ></spline-viewer>
</div>
