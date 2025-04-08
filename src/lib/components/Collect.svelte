<script lang="ts">
    import AnimatedBeamMultipleInput from "./CollectAnimation.svelte";
</script>

<div class="w-full flex flex-col items-center justify-center">
    <p class="text-primary font-normal mb-8">
        Every <a
            href="https://docs.orcfax.io/verify"
            target="_blank"
            class="text-accentLight underline"
        >
            Fact Statement
        </a>
        that Orcfax publishes on-chain is sourced from a minimum of three independent sources to mitigate
        single points of failure and protect against compromised or anomalous data. We call this the
        <a
            href="https://docs.orcfax.io/orcfax-vision#triangulation-of-data-points-vs-single-source-data-points"
            target="_blank"
            class="text-accentLight underline"
        >
            triangulation principle
        </a>.
    </p>
    <AnimatedBeamMultipleInput />
</div>
