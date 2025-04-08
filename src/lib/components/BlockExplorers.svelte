<script lang="ts">
    import AvatarGroup from "$lib/components/AvatarGroup.svelte";

    const explorers = [
        {
            name: "Cexplorer",
            href: "https://cexplorer.io/asset/asset1kuwfd0esf9xcxurp2x4f9w65lvz4tkfw5epugq",
            image: "/explorers/cexplorer.jpg",
        },
        {
            name: "Cardanoscan",
            href: "https://cardanoscan.io/token/a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e516f7263666178746f6b656e",
            image: "/explorers/cardanoscan.jpg",
        },
        {
            name: "Adastat",
            href: "https://adastat.net/tokens/a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e516f7263666178746f6b656e",
            image: "/explorers/adastat.jpg",
        },
    ];
</script>

<div class="flex flex-col items-center justify-center gap-2">
    <h2 class="text-lg font-semibold font-mulish text-secondary">Explore Orcfax on</h2>
    <AvatarGroup items={explorers} />
</div>
