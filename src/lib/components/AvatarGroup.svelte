<script lang="ts">
    interface Item {
        name: string;
        href: string;
        image: string;
    }

    interface Props {
        items: Item[];
    }

    let { items }: Props = $props();
</script>

<div class="relative">
    <div class="avatar-group -space-x-4 overflow-visible">
        {#each items as item}
            {@render avatar(item)}
        {/each}
    </div>
</div>

{#snippet avatar(item: Item)}
    <div class="tooltip" data-tip={item.name}>
        <a href={item.href} target="_blank">
            <div class="avatar w-12">
                <img src={item.image} alt={item.name} class="bg-primary" />
            </div>
        </a>
    </div>
{/snippet}
