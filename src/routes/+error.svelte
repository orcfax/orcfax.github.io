<script>
    import { page } from "$app/stores";
    import Waves from "$lib/components/Waves.svelte";

    let heading = $page.status === 404 ? "404" : "Error";
    let errorMessage =
        $page.error && $page.error.message.includes("Error: ")
            ? "An unknown error occurred"
            : $page.error?.message;
    let notFoundMessage =
        $page.error?.message === "Not Found" ? "Page not found" : $page.error?.message;
</script>

<div
    class="flex flex-col min-h-full h-full flex-grow justify-center items-center text-2xl overflow-hidden"
>
    <div
        class="flex flex-col bg-gradient-to-b from-primary to-accentLight justify-between items-center"
    >
        <div class="text-center space-y-2 items-center justify-center h-full mt-64">
            <h1 class="text-5xl lg:text-9xl font-black">{heading}</h1>
            <p class="text-2xl lg:text-4xl text-muted-foreground">
                {$page.status === 404 ? notFoundMessage : errorMessage}
            </p>
        </div>
        <Waves />
        <div class="bg-accent h-64 w-full"></div>
    </div>
</div>
