<script lang="ts">
    import "../app.pcss";

    let { children } = $props();
</script>

<!-- Setup Privacy-preserving Umami Analytics -->
<svelte:head>
    <script
        defer
        src="https://analytics.server.orcfax.io/script.js"
        data-website-id="8cf70d2e-1297-4f17-bc58-55d1a296e55a"
    ></script>
</svelte:head>

{@render children()}
