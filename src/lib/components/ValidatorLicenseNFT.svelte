<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    let observer = $state<MutationObserver | null>(null);
    let isVisible = $state(false);
    let isLoading = $state(true);

    onMount(() => {
        const viewer = document.querySelector("#validator-license");
        if (viewer) {
            const tryHideLogo = () => {
                if (viewer.shadowRoot) {
                    const logo = viewer.shadowRoot.querySelector("a#logo");
                    if (logo) logo.remove();

                    const canvas = viewer.shadowRoot.querySelector("canvas");
                    if (canvas) isLoading = false;
                }
            };

            tryHideLogo();

            observer = new MutationObserver((mutations) => {
                if (
                    mutations.some(
                        (m) => m.type === "childList" || (m.target as HTMLElement).id === "logo"
                    )
                ) {
                    tryHideLogo();
                }
            });

            if (viewer.shadowRoot) {
                observer.observe(viewer.shadowRoot, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                });
            }
        }

        const intersectionObserver = new IntersectionObserver(
            (entries) => {
                isVisible = entries[0].isIntersecting;
            },
            { threshold: 0.1 }
        );

        const element = document.querySelector("#validator-license-container");
        if (element) intersectionObserver.observe(element);

        return () => intersectionObserver.disconnect();
    });

    onDestroy(() => observer?.disconnect());
</script>

<div
    id="validator-license-container"
    class="z-0 w-60 h-96 pointer-events-none sm:pointer-events-auto relative"
>
    {#if isLoading}
        <div class="absolute inset-0 flex items-center justify-center bg-secondary rounded-lg">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
    {/if}
    <spline-viewer
        id="validator-license"
        url="https://prod.spline.design/ySoGV5wrfODU4WK6/scene.splinecode"
        style="opacity: {isVisible ? 1 : 0}; transition: opacity 0.3s ease-in-out;"
    ></spline-viewer>
</div>
