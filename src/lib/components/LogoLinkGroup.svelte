<script lang="ts">
    interface Item {
        name: string;
        href: string;
        image: string;
    }

    interface Props {
        items: Item[];
        size?: "small" | "medium" | "large";
        theme?: "dark" | "light";
    }

    let { items, size = "medium", theme = "dark" }: Props = $props();
</script>

<div class="relative">
    <div
        class={`avatar-group ${
            size === "small" ? "-space-x-2" : size === "large" ? "-space-x-6" : "-space-x-4"
        } overflow-visible`}
    >
        {#each items as item}
            {@render avatar(item)}
        {/each}
    </div>
</div>

{#snippet avatar(item: Item)}
    <div
        class={`tooltip tooltip-bottom ${theme === "dark" ? "tooltip-primary" : ""}`}
        data-tip={item.name}
    >
        <a href={item.href} target="_blank">
            <div
                class={`avatar ${
                    size === "small" ? "w-8" : size === "large" ? "w-16" : "w-12"
                } border ${theme === "dark" ? "border-primary/50" : "border-border"}`}
            >
                <img src={item.image} alt={item.name} class="bg-primary" />
            </div>
        </a>
    </div>
{/snippet}

<style>
    .tooltip.tooltip-primary {
        --tooltip-color: #eff5f5;
        --tooltip-text-color: #1f2421;
    }
</style>
