<script>
    import "../app.pcss";
    import Footer from "$lib/sections/Footer.svelte";
    import Header from "$lib/sections/Header.svelte";
</script>

<div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow bg-accent">
        <slot />
    </main>
    <Footer />
</div>
