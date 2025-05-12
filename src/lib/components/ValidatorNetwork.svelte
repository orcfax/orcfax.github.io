<script lang="ts">
    import { preventDefault } from "svelte/legacy";

    import Copy from "./icons/Copy.svelte";
    import Copying from "./icons/Copying.svelte";
    import Link from "$lib/components/Link.svelte";
    import ValidatorLicenseNFT from "$lib/components/ValidatorLicenseNFT.svelte";

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

<div class="bg-primary w-full px-6 lg:max-w-7xl lg:px-8 flex flex-col items-center">
    <div class="mx-auto max-w-3xl lg:text-center">
        <h1 class="mt-2 text-5xl lg:text-6xl font-bold font-mulish text-secondary text-center">
            Validator Network
        </h1>
        <p class="mt-6 text-lg/8 text-secondary font-mulish text-center">
            Orcfax's Path to Decentralization
        </p>
    </div>

    <div class="flex flex-col xs:flex-row items-start xs:items-center justify-center pt-10 gap-0">
        <div class="w-full xs:w-fit xs:sticky xs:top-0 xs:self-start">
            <div
                class="flex flex-col items-center gap-4 bg-secondary rounded-lg rounded-b-none border border-b-0 border-secondary border-x-0 shadow-lg w-full xs:w-[250px] xs:rounded-r-none xs:rounded-bl-lg md:rounded-lg"
            >
                <ValidatorLicenseNFT />
                <div class="w-max sm:w-auto mx-auto -mt-16 flex-grow text-primary">
                    <div class="grid grid-cols-1 gap-4 p-4 pt-0 w-full">
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
                                    maxLength={18}
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
                                Buy a License NFT
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
        </div>
        <div
            class="flex flex-col gap-6 bg-card border border-slate-400 rounded-lg rounded-t-none shadow-lg w-full xs:max-w-3xl p-6 sm:p-10 xs:rounded-r-lg xs:border-l-0 xs:rounded-l-none"
        >
            <div class="flex flex-col gap-4">
                <h1 class="text-2xl font-bold font-mulish text-secondary">Validator License NFT</h1>
                <div class="flex flex-col gap-4">
                    <p class="text-gray-600 max-w-xl">
                        The Validator License is an NFT that grants holders the right to operate an
                        Orcfax validator node in the Orcfax decentralized validator network.
                    </p>
                    <p class="text-gray-600 max-w-xl">
                        Orcfax validators are software nodes run by a decentralized network of
                        operators around the world. These nodes collect, validate, publish, and
                        archive real-world data on-chain.
                    </p>
                    <p class="text-gray-600 max-w-xl">
                        The Orcfax Validator License NFT <Link
                            href="https://medium.com/@orcfax/orcfax-validator-license-mint-032c327135d4"
                            isNewTab>mint</Link
                        > was completed on 2025-04-18. However, licenses can be purchased on the secondary
                        market.
                    </p>
                </div>
                <h1 class="mt-2 text-2xl font-bold font-mulish text-secondary">
                    Incentivized Testnet (ITN)
                </h1>
                <div class="flex flex-col gap-4">
                    <p class="text-gray-600 max-w-xl">
                        Orcfax's ongoing Incentivized Testnet (ITN) is a major step in enhancing the
                        decentralized oracle infrastructure on the Cardano blockchain.
                    </p>
                    <p class="text-gray-600 max-w-xl">
                        Instead of having off-chain business deals and contracts with hand-picked
                        validators, Orcfax is implementing a permissionless and decentralized Oracle
                        pool model for its validator network.
                    </p>
                    <p class="text-gray-600 max-w-xl">
                        This initiative is preparing the Orcfax network for a smooth transition from
                        our current federated node model to a fully decentralized model.
                    </p>
                    <p class="text-gray-600 max-w-xl">
                        For more information on the ITN, you can read the
                        <Link href="https://docs.orcfax.io/itn-overview" isNewTab>ITN Docs</Link> or
                        check out the <Link href="https://status.orcfax.io/validators" isNewTab
                            >Validators Status Page</Link
                        >.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
