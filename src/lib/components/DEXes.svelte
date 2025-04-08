<script lang="ts">
    import AvatarGroup from "$lib/components/AvatarGroup.svelte";

    const dexes = [
        {
            name: "Minswap",
            href: "https://minswap.org/swap?cA=&tA=&cB=a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e51&tB=6f7263666178746f6b656e",
            image: "/dex/minswap.jpg",
        },
        {
            name: "Wingriders",
            href: "https://app.wingriders.com/swap/ada/a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e516f7263666178746f6b656e",
            image: "/dex/wingriders.png",
        },
        {
            name: "Dexhunter",
            href: "https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e516f7263666178746f6b656e",
            image: "/dex/dexhunter.jpg",
        },
        {
            name: "Muesliswap",
            href: "https://muesliswap.com/swap?base=.&quote=a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e51.6f7263666178746f6b656e",
            image: "/dex/mueliswap.jpg",
        },
        {
            name: "Steelswap",
            href: "https://steelswap.io/swap?input=lovelace&output=a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e516f7263666178746f6b656e&type=input&amount=0",
            image: "/dex/steelswap.jpg",
        },
        {
            name: "Vyfi",
            href: "https://app.vyfi.io/dex?tokenA=lovelace&tokenB=a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e516f7263666178746f6b656e",
            image: "/dex/vyfi.png",
        },
        {
            name: "Genius Yield",
            href: "https://app.geniusyield.co/swap?from=asset1xdz4yj4ldwlpsz2yjgjtt9evg9uskm8jrzjwhj&to=asset1kuwfd0esf9xcxurp2x4f9w65lvz4tkfw5epugq",
            image: "/dex/geniusyield.jpg",
        },
    ];
</script>

<div class="flex flex-col items-center justify-center gap-2">
    <h2 class="text-lg font-semibold font-mulish text-secondary">Trade $FACT on</h2>
    <AvatarGroup items={dexes} />
</div>
