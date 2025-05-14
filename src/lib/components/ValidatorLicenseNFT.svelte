<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    let isLoading = $state(true);
    let isVisible = $state(false);
    let observer: MutationObserver | null = null;
    let checkInterval: number | null = null;
    let checkCount = 0;
    const MAX_CHECKS = 50; // 5 seconds at 100ms intervals

    // Function to hide the Spline logo
    const hideSplineLogo = () => {
        const viewer = document.querySelector("#validator-license");
        if (!viewer?.shadowRoot) return;

        // Try to find and remove the logo
        const logo = viewer.shadowRoot.querySelector("a#logo");
        if (logo) {
            // Apply all styles at once to minimize reflows
            (logo as HTMLElement).style.cssText =
                "display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important;";
            logo.remove();
        }

        // Check if canvas exists to determine if model is loaded
        const canvas = viewer.shadowRoot.querySelector("canvas");
        if (canvas) {
            isLoading = false;
            // Once we have the canvas, we can stop checking
            if (checkInterval) {
                clearInterval(checkInterval);
                checkInterval = null;
            }
            if (observer) {
                observer.disconnect();
                observer = null;
            }
        }
    };

    // Function to ensure we have access to the shadow root
    const ensureShadowRootAccess = () => {
        const viewer = document.querySelector("#validator-license");
        if (!viewer?.shadowRoot) return false;

        // Set up the observer if we haven't already
        if (!observer) {
            observer = new MutationObserver((mutations) => {
                // Only process mutations if we're still loading
                if (isLoading) {
                    hideSplineLogo();
                }
            });

            // Only observe childList changes in the shadow root
            observer.observe(viewer.shadowRoot, {
                childList: true,
                subtree: true,
            });
        }

        return true;
    };

    onMount(() => {
        // Initial attempt to hide the logo
        hideSplineLogo();

        // Set up an interval to continuously check for and hide the logo
        checkInterval = window.setInterval(() => {
            checkCount++;

            // Stop checking after MAX_CHECKS to prevent infinite checking
            if (checkCount >= MAX_CHECKS) {
                if (checkInterval) {
                    clearInterval(checkInterval);
                    checkInterval = null;
                }
                isLoading = false;
                return;
            }

            if (ensureShadowRootAccess()) {
                hideSplineLogo();
            }
        }, 100);

        // Set up intersection observer for visibility
        const intersectionObserver = new IntersectionObserver(
            (entries) => {
                isVisible = entries[0].isIntersecting;
            },
            { threshold: 0.1 }
        );

        const container = document.querySelector("#validator-license-container");
        if (container) {
            intersectionObserver.observe(container);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
            if (checkInterval) {
                clearInterval(checkInterval);
            }
            intersectionObserver.disconnect();
        };
    });
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
