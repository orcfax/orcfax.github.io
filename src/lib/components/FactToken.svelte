<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    let observer = $state<MutationObserver | null>(null);
    let isVisible = $state(false);
    let isLoading = $state(true);

    onMount(() => {
        const viewer = document.querySelector("#fact-token");
        if (viewer) {
            // Function to hide the logo if it exists
            const tryHideLogo = () => {
                if (viewer.shadowRoot) {
                    const logo = viewer.shadowRoot.querySelector("#logo") as HTMLElement;
                    if (logo) {
                        logo.style.display = "none";
                        logo.style.visibility = "hidden";
                        logo.style.opacity = "0";
                    }
                    // Check if the viewer has loaded its content
                    const canvas = viewer.shadowRoot.querySelector("canvas");
                    if (canvas) {
                        isLoading = false;
                    }
                }
            };

            // Try immediately in case it's already there
            tryHideLogo();

            // Observe for changes in the shadowRoot to catch when the logo is added
            observer = new MutationObserver(tryHideLogo);
            if (viewer.shadowRoot) {
                observer.observe(viewer.shadowRoot, { childList: true, subtree: true });
            }
        }

        // Create an Intersection Observer to detect when the component is visible
        const intersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    isVisible = entry.isIntersecting;
                });
            },
            { threshold: 0.1 }
        );

        const element = document.querySelector("#fact-token-container");
        if (element) {
            intersectionObserver.observe(element);
        }

        return () => {
            intersectionObserver.disconnect();
        };
    });

    onDestroy(() => {
        if (observer) observer.disconnect();
    });
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
