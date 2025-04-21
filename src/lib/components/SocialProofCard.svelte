<script lang="ts">
    import { cn } from "$lib/utils";

    export let img: string;
    export let name: string;
    export let username: string;
    export let body: string;
</script>

<figure
    class={cn(
        "relative w-64 overflow-hidden bg-card rounded-lg p-6 shadow-lg border border-slate-400 hover:shadow-xl transition-shadow duration-300 h-fit"
    )}
>
    <div class="flex flex-row items-center gap-2">
        <img class="rounded-full" width="32" height="32" alt="" src={img} />
        <div class="flex flex-col">
            <!-- svelte-ignore a11y-structure -->
            <figcaption class="text-sm font-medium dark:text-white">
                {name}
            </figcaption>
            <p class="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
    </div>
    <blockquote class="mt-2 text-sm">{body}</blockquote>
</figure>
