<script lang="ts">
    import { onMount } from "svelte";

    let svgHeight = $state(0);

    onMount(() => {
        const svg = document.querySelector("#waves") as SVGElement;
        svgHeight = svg.getBoundingClientRect().height;
    });
</script>

<div class="relative bottom-0 left-0 w-screen h-40 place-self-end overflow-x-hidden">
    <svg
        id="waves"
        class="relative w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 84"
        preserveAspectRatio="none"
        shape-rendering="auto"
    >
        <defs>
            <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
        </defs>
        <g class="parallax">
            <use
                xlink:href="#gentle-wave"
                x="48"
                y={svgHeight - 150}
                class="fill-accent opacity-70"
            />
            <use
                xlink:href="#gentle-wave"
                x="48"
                y={svgHeight - 145}
                class="fill-accent opacity-50"
            />
            <use
                xlink:href="#gentle-wave"
                x="48"
                y={svgHeight - 140}
                class="fill-accent opacity-30"
            />
            <use xlink:href="#gentle-wave" x="48" y={svgHeight - 135} class="fill-accent" />
        </g>
    </svg>
</div>
<div class="h-24 bg-gradient-to-b from-accent to-accentLight"></div>

<style>
    .parallax > use {
        animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    }
    .parallax > use:nth-child(1) {
        animation-delay: -4s;
        animation-duration: 9s;
    }
    .parallax > use:nth-child(2) {
        animation-delay: -5s;
        animation-duration: 12s;
    }
    .parallax > use:nth-child(3) {
        animation-delay: -6s;
        animation-duration: 15s;
    }
    .parallax > use:nth-child(4) {
        animation-delay: -7s;
        animation-duration: 22s;
    }
    @keyframes move-forever {
        0% {
            transform: translate3d(-90px, 0, 0);
        }
        100% {
            transform: translate3d(85px, 0, 0);
        }
    }
</style>
