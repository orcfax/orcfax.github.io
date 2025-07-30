<script lang="ts">
    import "../app.pcss";

    let { children } = $props();
</script>

<!-- Setup Privacy-preserving Umami Analytics -->
<svelte:head>
    <script
        defer
        src="https://analytics.server.orcfax.io/script.js"
        data-website-id="a01a1f2c-6d4f-4091-98ba-dec260fdc2c3"
    ></script>
</svelte:head>

{@render children()}
