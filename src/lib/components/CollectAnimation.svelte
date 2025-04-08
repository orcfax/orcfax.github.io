<script lang="ts">
    import { cn } from "$lib/utils";
    import { BoxIcon } from "@lucide/svelte";
    import AnimatedBeam from "./AnimatedBeam.svelte";
    import Circle from "./Circle.svelte";
    import { animate, type AnimationSequence, type SequenceOptions } from "motion";
    import type { SvelteComponent } from "svelte";
    import { hover, sequence } from "$lib/actions/motion.svelte";
    let containerRef = $state<HTMLElement | SVGElement>();
    // Circles
    let div1Ref = $state<HTMLElement | SVGElement>();
    let div2Ref = $state<HTMLElement | SVGElement>();
    let div3Ref = $state<HTMLElement | SVGElement>();
    let div6Ref = $state<HTMLElement | SVGElement>();
</script>

<div
    bind:this={containerRef}
    class={cn(
        "relative flex w-full max-w-[400px] items-center justify-center overflow-hidden rounded-lg"
    )}
>
    <div class="flex h-full w-full flex-row justify-between gap-10 max-w-lg items-center">
        <div class="flex flex-col justify-center gap-2">
            <!-- Div 1 -->
            <Circle class="p-0">
                <img
                    bind:this={div1Ref}
                    src="/sources/coinbase.jpg"
                    alt="Coinbase Logo"
                    class="rounded-full"
                />
            </Circle>
            <!-- Div 2 -->
            <Circle class="p-0">
                <img
                    bind:this={div2Ref}
                    src="/sources/kraken.webp"
                    alt="Kraken Logo"
                    class="rounded-full"
                />
            </Circle>
            <!-- Div 3 -->
            <Circle class="p-0">
                <img
                    bind:this={div3Ref}
                    src="/sources/gemini.png"
                    alt="Gemini Logo"
                    class="rounded-full"
                />
            </Circle>
            <!-- Div 4 -->
            <!-- <Circle class="p-0">
                <img
                    bind:this={div4Ref}
                    src="/sources/bitstamp.jpg"
                    alt="Bitstamp Logo"
                    class="rounded-full"
                />
            </Circle> -->
            <!-- Div 5 -->
            <!-- <Circle class="p-0">
                <img
                    bind:this={div5Ref}
                    src="/sources/hitbtc.png"
                    alt="Hitbtc Logo"
                    class="rounded-full"
                />
            </Circle> -->
        </div>
        <div class="flex flex-col justify-center">
            <!-- Div 6 -->
            <Circle class="bg-secondary border-secondary p-0">
                <div
                    class="w-10 h-10 bg-secondary stroke-accent rounded-full"
                    bind:this={div6Ref}
                    use:sequence={[
                        {
                            keyframes: { scale: [1.2, 1] },
                            options: { duration: 0.5, type: "spring" },
                        },
                    ]}
                >
                    <BoxIcon class="w-10 h-10 stroke-inherit stroke-[1.6]" />
                </div>
            </Circle>
        </div>
    </div>

    <AnimatedBeam bind:containerRef bind:fromRef={div1Ref} bind:toRef={div6Ref} />
    <AnimatedBeam bind:containerRef bind:fromRef={div2Ref} bind:toRef={div6Ref} />
    <AnimatedBeam bind:containerRef bind:fromRef={div3Ref} bind:toRef={div6Ref} />
    <!-- <AnimatedBeam bind:containerRef bind:fromRef={div4Ref} bind:toRef={div6Ref} /> -->
    <!-- <AnimatedBeam bind:containerRef bind:fromRef={div5Ref} bind:toRef={div6Ref} /> -->
</div>
