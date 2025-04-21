<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }

    const { children }: Props = $props();
</script>

<span class="realistic-marker-highlight">{@render children()}</span>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters" style="display:none;">
    <defs>
        <filter id="marker-shape">
            <feTurbulence type="fractalNoise" baseFrequency="0 0.15" numOctaves="1" result="warp" />
            <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="30"
                in="SourceGraphic"
                in2="warp"
            />
        </filter>
    </defs>
</svg>

<style>
    .realistic-marker-highlight {
        position: relative;
        font-weight: 700;
        display: inline-block;
        margin-right: -0.1em;
    }

    .realistic-marker-highlight:before {
        content: "";
        background-color: #d1e3e2;
        width: 100%;
        height: 1.5em;
        position: absolute;
        z-index: -1;
        filter: url(#marker-shape);
        top: 0.05em;
        padding: 0;
    }
</style>
