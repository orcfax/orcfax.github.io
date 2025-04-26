<script lang="ts">
    import Copy from "$lib/components/icons/Copy.svelte";
    import Copying from "$lib/components/icons/Copying.svelte";
    import Link from "$lib/components/Link.svelte";
    import LogoLinkGroup from "$lib/components/LogoLinkGroup.svelte";
    import TruncatedText from "$lib/components/TruncatedText.svelte";

    let isCopying = $state(false);

    function handleCopyToClipboard(event: MouseEvent) {
        event.preventDefault();
        const policyID = "a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e51";
        navigator.clipboard.writeText(policyID);
        isCopying = true;
        setTimeout(() => {
            isCopying = false;
        }, 1000);
        return;
    }
</script>

<div class="w-max sm:w-auto mx-auto flex-grow text-primary">
    <div class="grid grid-cols-1 gap-4 p-8 pt-0">
        <div class="flex flex-col">
            <span class="text-sm">Ticker</span>
            <span class="font-medium">FACT</span>
        </div>
        <div class="flex flex-col">
            <span class="text-sm">Name</span>
            <span class="font-medium">Orcfax Token</span>
        </div>
        <!-- <div class="flex flex-col">
            <span class="text-sm">Asset Name</span>
            <span class="font-medium">orcfaxtoken</span>
        </div>
        <div class="flex flex-col">
            <span class="text-sm">Asset Hex</span>
            <span class="font-medium">6f7263666178746f6b656e</span>
        </div> -->
        <div class="flex flex-col">
            <span class="text-sm">Total Supply</span>
            <span class="font-medium">1 Billion</span>
        </div>
        <div class="flex flex-col">
            <span class="text-sm">Policy ID</span>
            <div class="flex items-center gap-2">
                <TruncatedText
                    text="a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e51"
                    maxLength={20}
                />
                <button
                    class="flex items-center justify-center relative group h-9 w-9 -mt-4 -ml-1"
                    onclick={handleCopyToClipboard}
                >
                    {#if isCopying}
                        <Copying />
                    {:else}
                        <Copy />
                    {/if}
                </button>
            </div>
            <div class="flex flex-col mt-1">
                <LogoLinkGroup
                    size="small"
                    items={[
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
                    ]}
                />
            </div>
        </div>

        <!-- <div class="flex flex-col">
            <span class="text-sm">Fingerprint</span>
            <div class="flex items-center gap-2">
                <TruncatedText text="asset1kuwfd0esf9xcxurp2x4f9w65lvz4tkfw5epugq" maxLength={20} />
                <button
                    class="flex items-center justify-center relative group h-9 w-9 -mt-4 -ml-1"
                    onclick={handleCopyToClipboard}
                >
                    {#if isCopying}
                        <Copying />
                    {:else}
                        <Copy />
                    {/if}
                </button>
            </div>
        </div> -->
        <div class="flex flex-col gap-3 pt-6 mt-2 border-t border-border">
            <Link
                href="https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e516f7263666178746f6b656e"
                isNewTab
                isButton
                theme="light"
            >
                Buy & Trade $FACT
            </Link>

            <div class="flex flex-col gap-1">
                <h3 class="text-xs text-primary font-medium flex items-center">Available on:</h3>
                <LogoLinkGroup
                    size="small"
                    items={[
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
                    ]}
                />
            </div>
        </div>
    </div>
</div>
