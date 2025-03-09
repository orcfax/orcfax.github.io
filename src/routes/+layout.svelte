<script lang="ts">
    import "../app.pcss";
    import Footer from "$lib/sections/Footer.svelte";
    import Header from "$lib/sections/Header.svelte";

    let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow bg-accent">
        {@render children()}
    </main>
    <Footer />
</div>
