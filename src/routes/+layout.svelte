<script lang="ts">
    import "../app.pcss";

    let { children } = $props();
</script>

<!-- Setup Privacy-preserving Umami Analytics -->
<svelte:head>
    <!-- Umami base script -->
    <script
        async
        defer
        data-website-id="2d656c7d-b41a-4e19-934c-d7c9d91d784d"
        src="https://analytics.server.orcfax.io/umami.js"
    ></script>
    <!-- Outbound-link helper -->
    <script async defer src="/track-external.js"></script>
</svelte:head>

{@render children()}
