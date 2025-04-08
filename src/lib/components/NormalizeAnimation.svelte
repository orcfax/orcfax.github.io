<script lang="ts">
    import { BoxIcon, FileBadge } from "@lucide/svelte";
    import AnimatedBeam from "./AnimatedBeam.svelte";
    import Circle from "./Circle.svelte";
    import { Settings } from "@lucide/svelte";
    import { motion } from "$lib/actions/motion.svelte";
    let containerRef;
    let div1Ref;
    let div2Ref;
    let div3Ref;
    let className: any = "";
    export { className as class };
</script>

<div
    bind:this={containerRef}
    class="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg p-10"
>
    <div class="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div class="flex flex-row justify-between">
            <Circle class="bg-secondary border-secondary p-0">
                <div class="w-10 h-10 bg-secondary rounded-full" bind:this={div1Ref}>
                    <BoxIcon class="w-10 h-10 stroke-accent stroke-[1.6]" />
                </div>
            </Circle>
            <Circle class="bg-secondary border-secondary p-0">
                <div
                    class="w-10 h-10 bg-secondary rounded-full"
                    bind:this={div2Ref}
                    use:motion={{
                        keyframes: { rotate: [0, 360] },
                        options: { duration: 3.5, repeat: Infinity, ease: "linear" },
                    }}
                >
                    <Settings class="w-10 h-10 stroke-primary stroke-[1.6]" />
                </div>
            </Circle>
            <Circle class="bg-secondary border-secondary p-0">
                <div class="w-10 h-10 bg-secondary rounded-full" bind:this={div3Ref}>
                    <FileBadge class="w-10 h-10 stroke-accent stroke-[1.6]" />
                </div>
            </Circle>
        </div>
    </div>

    <AnimatedBeam bind:containerRef bind:fromRef={div1Ref} bind:toRef={div2Ref} duration={6} />
    <AnimatedBeam
        bind:containerRef
        bind:fromRef={div2Ref}
        bind:toRef={div3Ref}
        duration={6}
        delay={1}
    />
</div>
