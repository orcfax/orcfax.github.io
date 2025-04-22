<script lang="ts">
    import { cn } from "$lib/utils";
    import {
        BoxIcon,
        FileText,
        FileBadge,
        FileSearch,
        Settings,
        SendHorizontal,
    } from "@lucide/svelte";
    import AnimatedBeam from "./AnimatedBeam.svelte";
    import Circle from "./Circle.svelte";
    import ArweaveLogo from "./icons/ArweaveLogo.svelte";
    import CardanoLogo from "./icons/CardanoLogo.svelte";
    import { motion } from "$lib/actions/motion.svelte";

    // Refs for all circles
    let containerRef = $state<HTMLElement | SVGElement>();
    // Collect stage
    let collect1Ref = $state<HTMLElement | SVGElement>();
    let collect2Ref = $state<HTMLElement | SVGElement>();
    let collect3Ref = $state<HTMLElement | SVGElement>();
    let collect4Ref = $state<HTMLElement | SVGElement>();
    // Process stage
    let process2Ref = $state<HTMLElement | SVGElement>();
    let process3Ref = $state<HTMLElement | SVGElement>();
    // Validate stage
    let validate1Ref = $state<HTMLElement | SVGElement>();
    let validate2Ref = $state<HTMLElement | SVGElement>();
    let validate3Ref = $state<HTMLElement | SVGElement>();
    // Publish stage
    let publish1Ref = $state<HTMLElement | SVGElement>();
    let publish2Ref = $state<HTMLElement | SVGElement>();
    let publish3Ref = $state<HTMLElement | SVGElement>();

    let collect1Duration = $state(4);
    let collect2Duration = $state(4);
    let collect3Duration = $state(4);
    let collectToProcessDuration = $state(4);
    let process1Duration = $state(4);
    let processToValidateDuration = $state(4);
    let validate1Duration = $state(4);
    let validateToPublishDuration = $state(4);
    let publish1Duration = $state(4);
</script>

<div
    bind:this={containerRef}
    class={cn(
        "relative flex flex-col w-full h-full items-center overflow-hidden rounded-lg justify-between py-14 -mt-8"
    )}
>
    <!-- Collect Stage -->
    <div class="flex flex-col lg:flex-row items-center gap-20">
        <div class="flex flex-row lg:flex-col justify-center gap-2 relative z-20">
            <Circle class="p-0 h-10 w-10">
                <div bind:this={collect1Ref} data-tip={"Coinbase"} class="tooltip tooltip-right">
                    <img src="/sources/coinbase.jpg" alt="Coinbase Logo" class="rounded-full" />
                </div>
            </Circle>
            <Circle class="p-0 h-10 w-10">
                <div bind:this={collect2Ref} data-tip={"Kraken"} class="tooltip tooltip-right">
                    <img src="/sources/kraken.webp" alt="Kraken Logo" class="rounded-full" />
                </div>
            </Circle>
            <Circle class="p-0 h-10 w-10">
                <div bind:this={collect3Ref} data-tip={"Gemini"} class="tooltip tooltip-right">
                    <img src="/sources/gemini.png" alt="Gemini Logo" class="rounded-full" />
                </div>
            </Circle>
        </div>

        <div class="relative z-20">
            <Circle class="bg-secondary border-secondary p-0">
                <div
                    class="w-10 h-10 bg-secondary stroke-accent rounded-full"
                    bind:this={collect4Ref}
                >
                    <BoxIcon class="w-10 h-10 stroke-inherit stroke-[1.6]" />
                </div>
            </Circle>
        </div>
    </div>

    <!-- Process Stage -->
    <div class="flex flex-col lg:flex-row items-center gap-20">
        <Circle class="bg-secondary border-secondary p-0">
            <div
                class="w-10 h-10 bg-secondary rounded-full"
                bind:this={process2Ref}
                use:motion={{
                    keyframes: { rotate: [0, 360] },
                    options: { duration: 3.5, repeat: Infinity, ease: "linear" },
                }}
            >
                <Settings class="w-10 h-10 stroke-primary stroke-[1.6]" />
            </div>
        </Circle>

        <Circle class="bg-secondary border-secondary p-0">
            <div class="w-10 h-10 bg-secondary rounded-full" bind:this={process3Ref}>
                <FileText class="w-10 h-10 stroke-accent stroke-[1.6]" />
            </div>
        </Circle>
    </div>

    <!-- Validate Stage -->
    <div class="flex flex-col lg:flex-row items-center gap-20">
        <Circle class="bg-secondary border-secondary p-0">
            <div
                class="w-10 h-10 bg-secondary rounded-full"
                bind:this={validate2Ref}
                use:motion={{
                    keyframes: { scale: [1, 1.05, 1] },
                    options: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <FileSearch class="w-10 h-10 stroke-primary stroke-[1.6]" />
            </div>
        </Circle>

        <Circle class="bg-secondary border-secondary p-0">
            <div class="w-10 h-10 bg-secondary rounded-full" bind:this={validate3Ref}>
                <FileBadge class="w-10 h-10 stroke-accent stroke-[1.6]" />
            </div>
        </Circle>
    </div>

    <!-- Publish Stage -->
    <div class="flex flex-col lg:flex-row items-center gap-20">
        <Circle class="bg-secondary border-secondary p-0">
            <div class="w-10 h-10 bg-secondary rounded-full" bind:this={publish1Ref}>
                <SendHorizontal class="w-10 h-10 stroke-primary stroke-[1.6]" />
            </div>
        </Circle>
        <div class="flex flex-row lg:flex-col justify-center gap-8">
            <Circle class="p-0 h-10 w-10 bg-blue-600">
                <div bind:this={publish2Ref} class="tooltip tooltip-left" data-tip={"Cardano"}>
                    <CardanoLogo />
                </div>
            </Circle>
            <Circle class="p-0 h-10 w-10 bg-white">
                <div bind:this={publish3Ref} class="tooltip tooltip-left" data-tip={"Arweave"}>
                    <ArweaveLogo />
                </div>
            </Circle>
        </div>
    </div>

    <AnimatedBeam
        bind:containerRef
        bind:fromRef={collect1Ref}
        bind:toRef={collect4Ref}
        duration={collect1Duration}
    />
    <AnimatedBeam
        bind:containerRef
        bind:fromRef={collect2Ref}
        bind:toRef={collect4Ref}
        duration={collect2Duration}
    />
    <AnimatedBeam
        bind:containerRef
        bind:fromRef={collect3Ref}
        bind:toRef={collect4Ref}
        duration={collect3Duration}
    />

    <AnimatedBeam
        bind:containerRef
        bind:fromRef={collect4Ref}
        bind:toRef={process2Ref}
        delay={0.5}
        duration={collectToProcessDuration}
        startYOffset={0}
        startXOffset={20}
        reverse={true}
    />

    <AnimatedBeam
        bind:containerRef
        bind:fromRef={process2Ref}
        bind:toRef={process3Ref}
        delay={1.5}
        duration={process1Duration}
    />
    <AnimatedBeam
        bind:containerRef
        bind:fromRef={process3Ref}
        bind:toRef={validate2Ref}
        delay={2}
        duration={processToValidateDuration}
        reverse={true}
    />

    <AnimatedBeam
        bind:containerRef
        bind:fromRef={validate2Ref}
        bind:toRef={validate3Ref}
        delay={3.5}
        duration={validate1Duration}
    />

    <AnimatedBeam
        bind:containerRef
        bind:fromRef={validate3Ref}
        bind:toRef={publish1Ref}
        duration={validateToPublishDuration}
        reverse={true}
        delay={4}
    />
    <AnimatedBeam
        bind:containerRef
        bind:fromRef={publish1Ref}
        bind:toRef={publish2Ref}
        duration={publish1Duration}
        delay={4.5}
    />
    <AnimatedBeam
        bind:containerRef
        bind:fromRef={publish1Ref}
        bind:toRef={publish3Ref}
        duration={publish1Duration}
        delay={4.5}
    />
</div>
