<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    let intervalId: number;

    // Remove the Spline logo from the viewer
    onMount(() => {
        intervalId = setInterval(() => {
            const viewer = document.querySelector("#validator-license");
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

<div class="w-72 h-96 pointer-events-none sm:pointer-events-auto">
    <spline-viewer
        id="validator-license"
        url="https://prod.spline.design/ySoGV5wrfODU4WK6/scene.splinecode"
    ></spline-viewer>
</div>
