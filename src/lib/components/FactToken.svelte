<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    let observer = $state<MutationObserver | null>(null);
    let isVisible = $state(false);
    let isLoading = $state(true);

    onMount(() => {
        const viewer = document.querySelector("#fact-token");
        if (viewer) {
            const tryHideLogo = () => {
                if (viewer.shadowRoot) {
                    const logo = viewer.shadowRoot.querySelector("a#logo");
                    if (logo) logo.remove();

                    const canvas = viewer.shadowRoot.querySelector("canvas");
                    if (canvas) {
                        isLoading = false;
                        observer?.disconnect(); // Disconnect observer once canvas is found
                    }
                }
            };

            // Initial attempt
            tryHideLogo();

            // Set up observer with a more comprehensive configuration
            observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === "childList") {
                        tryHideLogo();
                    }
                });
            });

            // Observe with more comprehensive options
            if (viewer.shadowRoot) {
                observer.observe(viewer.shadowRoot, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    characterData: true,
                });
            }

            // Fallback: if after 5 seconds we still haven't found the canvas, force loading to false
            setTimeout(() => {
                if (isLoading) {
                    isLoading = false;
                }
            }, 5000);
        }

        const intersectionObserver = new IntersectionObserver(
            (entries) => {
                isVisible = entries[0].isIntersecting;
            },
            { threshold: 0.1 }
        );

        const element = document.querySelector("#fact-token-container");
        if (element) intersectionObserver.observe(element);

        return () => intersectionObserver.disconnect();
    });

    onDestroy(() => observer?.disconnect());
</script>

<div
    id="fact-token-container"
    class="w-48 h-52 pointer-events-none sm:pointer-events-auto mt-8 relative"
>
    {#if isLoading}
        <div class="absolute inset-0 flex items-center justify-center bg-secondary rounded-lg">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
    {/if}
    <spline-viewer
        id="fact-token"
        url="https://prod.spline.design/YkOetzPdSoEqtenO/scene.splinecode"
        style="opacity: {isVisible ? 1 : 0}; transition: opacity 0.3s ease-in-out;"
    ></spline-viewer>
</div>
