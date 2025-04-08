<script lang="ts">
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { writable } from "svelte/store";

    type TimelineItem = {
        title: string;
        content: any;
    };
    export let timelineData: TimelineItem[] = [];
    let containerRef: HTMLDivElement;
    let height = 0;
    let scrollProgress = writable(0);
    let heightTransform = tweened(0, { duration: 400, easing: cubicOut });
    let opacityTransform = tweened(0, { duration: 400, easing: cubicOut });

    onMount(() => {
        if (containerRef) {
            const rect = containerRef.getBoundingClientRect();
            height = rect.height;
        }

        let onScroll = () => {
            const rect = containerRef.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            let progress = Math.min(
                1,
                Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
            );
            progress = progress < 0.6 ? progress - 0.09 : progress - 0.004;
            scrollProgress.set(progress);
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    $: scrollProgress.subscribe((progress) => {
        heightTransform.set(progress * height);
        opacityTransform.set(progress < 0.1 ? progress * 10 : 1);
    });
</script>

<div
    class="w-full h-fit bg-secondary dark:bg-neutral-950 font-sans md:px-10"
    bind:this={containerRef}
>
    <div class="max-w-7xl mx-auto pb-0 px-4 md:px-8 lg:px-10">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base/7 font-semibold text-primary font-mulish">How It Works</h2>
            <p
                class="mt-2 text-pretty text-4xl font-semibold font-mulish text-primary sm:text-5xl lg:text-balance"
            >
                The Orcfax Workflow
            </p>
            <p class="mt-6 text-lg/8 text-primary font-mulish">
                Every Fact Statement has a life cycle. Here's how it goes.
            </p>
        </div>
    </div>

    <div class="relative max-w-2xl mx-auto pb-20 overflow-hidden">
        <div
            style="height: {height}px;"
            class="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-primary timeline-line z-0"
        >
            <div
                style="height: {$heightTransform}px; opacity: {$opacityTransform};"
                class="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-accentDark via-accentLight to-transparent from-[0%] via-[32.5%] rounded-full"
            ></div>
        </div>

        {#each timelineData as item, index}
            <div class="flex justify-start pt-10 md:pt-40 relative z-10">
                <div class="relative pl-20 md:pl-16 w-full">
                    <div class="flex items-center mb-6">
                        <div
                            class="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center -mt-5"
                        >
                            <div
                                class="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"
                            ></div>
                        </div>
                        <h3 class="pl-8 text-2xl md:text-4xl font-bold text-primary">
                            {item.title}
                        </h3>
                    </div>
                    <div class="pl-8">
                        {#if typeof item.content === "string"}
                            {item.content}
                        {:else}
                            <svelte:component this={item.content} />
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .timeline-line {
        mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
        );
    }
</style>
