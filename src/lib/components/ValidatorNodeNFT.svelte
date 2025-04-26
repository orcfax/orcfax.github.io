<script lang="ts">
    import { preventDefault } from "svelte/legacy";

    import Copy from "./../components/icons/Copy.svelte";
    import Copying from "./../components/icons/Copying.svelte";
    import Link from "$lib/components/Link.svelte";
    import ValidatorLicense from "$lib/components/ValidatorLicense.svelte";

    import TokenDistributionChart from "$lib/components/TokenDistributionChart.svelte";
    import LogoLinkGroup from "$lib/components/LogoLinkGroup.svelte";
    import TruncatedText from "$lib/components/TruncatedText.svelte";

    let isCopying = $state(false);
    function handleCopyToClipboard() {
        const policyID = "0c6f22bfabcb055927ca3235eac387945b6017f15223d9365e6e4e43";
        navigator.clipboard.writeText(policyID);
        isCopying = true;
        setTimeout(() => {
            isCopying = false;
        }, 1000);
        return;
    }
</script>

<div class="bg-primary">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div class="mx-auto max-w-3xl lg:text-center">
            <h1 class="mt-2 text-6xl font-bold font-mulish text-secondary">Validator Network</h1>
            <p class="mt-6 text-lg/8 text-secondary font-mulish">
                Orcfax's Path to Decentralization
            </p>
        </div>

        <div class="flex items-center justify-center w-full pt-10">
            <div class="flex flex-col items-center gap-4 bg-secondary rounded-lg border shadow-lg">
                <ValidatorLicense />
                <div class="w-max sm:w-auto mx-auto -mt-16 flex-grow text-primary">
                    <div class="grid grid-cols-1 gap-4 p-8 pt-0">
                        <div class="flex flex-col">
                            <span class="text-sm">Name</span>
                            <span class="font-medium">Validator License</span>
                        </div>

                        <div class="flex flex-col">
                            <span class="text-sm">Total Supply</span>
                            <span class="font-medium">100</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm">Policy ID</span>
                            <div class="flex items-center gap-2">
                                <TruncatedText
                                    text="0c6f22bfabcb055927ca3235eac387945b6017f15223d9365e6e4e43"
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
                                            href: "https://cexplorer.io/policy/0c6f22bfabcb055927ca3235eac387945b6017f15223d9365e6e4e43",
                                            image: "/explorers/cexplorer.jpg",
                                        },
                                        {
                                            name: "Cardanoscan",
                                            href: "https://cardanoscan.io/tokenPolicy/0c6f22bfabcb055927ca3235eac387945b6017f15223d9365e6e4e43",
                                            image: "/explorers/cardanoscan.jpg",
                                        },
                                        {
                                            name: "Adastat",
                                            href: "https://adastat.net/policies/0c6f22bfabcb055927ca3235eac387945b6017f15223d9365e6e4e43",
                                            image: "/explorers/adastat.jpg",
                                        },
                                        {
                                            name: "Pool.pm",
                                            href: "https://pool.pm/policy/0c6f22bfabcb055927ca3235eac387945b6017f15223d9365e6e4e43",
                                            image: "/explorers/poolpm.png",
                                        },
                                        {
                                            name: "Jpg Store",
                                            href: "https://www.jpg.store/collection/orcfaxvalidatorlicenses",
                                            image: "/explorers/jpgstore.png",
                                        },
                                    ]}
                                />
                            </div>
                        </div>

                        <div class="flex flex-col gap-3 pt-6 mt-2 border-t border-border">
                            <Link
                                href="https://www.jpg.store/collection/orcfaxvalidatorlicenses?tab=items&listingTypes=SINGLE_ASSET&saleType=buy-now"
                                isNewTab
                                isButton
                                theme="light"
                            >
                                Buy a Validator License
                            </Link>

                            <div class="flex flex-col gap-1">
                                <h3 class="text-xs text-primary font-medium flex items-center">
                                    Available on:
                                </h3>
                                <LogoLinkGroup
                                    size="small"
                                    items={[
                                        {
                                            name: "Jpg Store",
                                            href: "https://www.jpg.store/collection/orcfaxvalidatorlicenses?tab=items&listingTypes=SINGLE_ASSET&saleType=buy-now",
                                            image: "/explorers/jpgstore.png",
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col gap-6 bg-card border border-slate-400 p-10 rounded-r-lg border-l-0"
            >
                <div class="flex flex-col gap-2">
                    <h1 class="mt-2 text-2xl font-bold font-mulish text-secondary">
                        Validator License NFT
                    </h1>
                    <div class="flex flex-col">
                        <p class="text-gray-600 max-w-xl">
                            $FACT is the Cardano-native utility token for Orcfax's ecosystem. It has
                            necessary function and utility and is used for oracle data publication,
                            staking by our data validator nodes, validator network incentivization,
                            and voting power in future DAO governance decisions.
                        </p>
                    </div>
                </div>

                <div class="flex flex-col gap-8">
                    <p class="mt-2 text-gray-600 max-w-xl">
                        The $FACT token was <Link
                            href="https://medium.com/@orcfax/orcfax-token-launch-in-collaboration-with-wingriders-launchpad-39d63da2b379"
                            isNewTab>made available</Link
                        > on the open market via the Wingriders Launchpad on 2023-09-08 and was distributed
                        as follows:
                    </p>
                    <div class="w-full max-w-[500px] h-[200px] relative">
                        <TokenDistributionChart />
                    </div>
                    <p class="text-gray-600 max-w-xl">
                        You can read more about the <Link
                            href="https://docs.orcfax.io/utility-token"
                            isNewTab>utility token</Link
                        >
                        and <Link href="https://docs.orcfax.io/tokenomics" isNewTab>tokenomics</Link
                        > in our docs.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
