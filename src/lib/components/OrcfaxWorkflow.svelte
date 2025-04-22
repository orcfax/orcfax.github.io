<script lang="ts">
    import { Tween } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import WorkflowAnimation from "$lib/components/WorkflowAnimation.svelte";

    let timelineRef: HTMLDivElement | null = $state(null);
    let height = $state(0);
    let scrollProgress = $state(0);
    let heightTransform = new Tween(0, { duration: 400, easing: cubicOut });
    let opacityTransform = new Tween(0, { duration: 400, easing: cubicOut });

    $effect(() => {
        if (timelineRef) {
            const rect = timelineRef.getBoundingClientRect();
            height = rect.height;
        }

        let onScroll = () => {
            if (!timelineRef) return;
            const rect = timelineRef.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            let progress = Math.min(
                1,
                Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
            );
            progress = progress < 0.6 ? progress - 0.09 : progress - 0.004;
            scrollProgress = progress;
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    $effect(() => {
        heightTransform.set(scrollProgress * height);
        opacityTransform.set(scrollProgress < 0.1 ? scrollProgress * 10 : 1);
    });
</script>

<div class="w-full h-fit bg-secondary font-sans md:px-10" bind:this={timelineRef}>
    <div class="max-w-7xl mx-auto pb-0 px-4 md:px-8 lg:px-10">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h1 class="mt-2 text-6xl font-bold font-mulish text-primary">The Orcfax Workflow</h1>
            <p class="mt-6 text-lg/8 text-primary font-mulish">
                Every <a
                    href="https://docs.orcfax.io/verify"
                    target="_blank"
                    class="text-accent underline"
                >
                    Fact Statement
                </a> has a life cycle. Here's how it goes.
            </p>
        </div>
    </div>

    <div class="relative max-w-4xl mx-auto pb-20 overflow-hidden pt-12">
        <div class="relative">
            <div
                style="height: {height}px;"
                class="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-neutral-300 dark:bg-neutral-700 timeline-line z-0"
            >
                <div
                    style="height: {heightTransform.current}px; opacity: {opacityTransform.current};"
                    class="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-accentDark to-accentLight from-[32.5%] rounded-full"
                ></div>
            </div>
            <div class="grid grid-cols-5">
                <div class="flex flex-col col-span-3 gap-10">
                    {@render TimelineStep(
                        "1. Collect",
                        "First, data is collected from a minimum of 3 independent sources to mitigate single points of failure and protect against compromised or anomalous data."
                    )}

                    {@render TimelineStep(
                        "2. Process",
                        "Then, each source's data is normalized into a common standards-compliant format that is both human and machine readable and calculated to a single value."
                    )}

                    {@render TimelineStep(
                        "3. Validate",
                        "Then, a network of validator nodes verify the integrity of the data's structure, timestamps, and hashes ensuring an authentic and accurate final value."
                    )}

                    {@render TimelineStep(
                        "4. Publish",
                        "Finally, the value is published on-chain for smart contracts to use along with a permanent link to its fact statement archive (stored on Arweave L0) containing the necessary supporting information needed to independently verify and prove the value of the fact statement in perpetuity."
                    )}
                </div>
                <div class="col-span-2">
                    <WorkflowAnimation />
                </div>
            </div>
        </div>
    </div>
</div>

{#snippet TimelineStep(title: string, description: string)}
    <div class="flex justify-start relative z-10">
        <div class="relative pl-8 lg:pl-20 w-full">
            <div class="flex items-center mb-6">
                <div
                    class="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center"
                >
                    <div
                        class="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"
                    ></div>
                </div>
                <h3 class="pl-8 text-2xl md:text-4xl font-bold text-primary">
                    {title}
                </h3>
            </div>
            <div class="pl-8 flex">
                <div class="w-full flex items-center justify-center">
                    <p class="text-primary font-normal">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </div>
{/snippet}

<style>
    .timeline-line {
        mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 2%,
            black 98%,
            transparent 100%
        );
    }
</style>
