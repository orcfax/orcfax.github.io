<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import TokenDetails from "$lib/components/TokenDetails.svelte";
    import TokenDistributionChart from "$lib/components/TokenDistributionChart.svelte";
    import FactToken from "$lib/components/FactToken.svelte";
    import SupportedDEXes from "$lib/components/DEXes.svelte";
    import BlockExplorers from "$lib/components/BlockExplorers.svelte";
</script>

<div class="bg-primary">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-center text-base/7 font-semibold text-secondary font-mulish">Tokenomics</h2>
        <p
            class="mx-auto mt-2 max-w-3xl text-balance text-center text-5xl font-semibold font-mulish tracking-tight text-secondary"
        >
            $FACT: Cardano-native Utility Token
        </p>

        <div class="flex flex-col items-center justify-around gap-12 pt-20">
            <div
                class="flex flex-col lg:flex-row items-center gap-4 bg-secondary/95 rounded-lg p-8 border shadow-lg"
            >
                <FactToken />
                <TokenDetails />
            </div>
            <div class="flex flex-col lg:flex-row justify-evenly gap-8">
                <div class="flex flex-col items-center">
                    <div class="flex flex-col">
                        <h2 class="text-2xl font-semibold font-mulish text-secondary">
                            Supply & Distribution
                        </h2>
                        <p class="mt-2 text-gray-600 max-w-md">
                            $FACT was distributed to a series of ADA Handle wallets and <Link
                                href="https://medium.com/@orcfax/orcfax-token-launch-in-collaboration-with-wingriders-launchpad-39d63da2b379"
                                isNewTab>was made available</Link
                            > on the open market via the Wingriders Launchpad.
                        </p>
                    </div>
                    <div class="w-full max-w-[600px] h-[300px] relative">
                        <TokenDistributionChart />
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex flex-col items-center">
                        <div class="flex flex-col">
                            <h2 class="text-2xl font-semibold font-mulish text-secondary">
                                Utility & Usage
                            </h2>
                            <ol class="pl-8 text-gray-600 max-w-md">
                                <li class="list-decimal">
                                    Payment for on-demand, oracle data publication
                                </li>
                                <li class="list-decimal">Staking by our data validator nodes</li>
                                <li class="list-decimal">Reward payments to validators</li>
                                <li class="list-decimal">
                                    Voting power in Orcfax DAO governance decisions
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <SupportedDEXes />
                        <BlockExplorers />
                    </div>
                </div>
            </div>

            <p class="text-lg">
                You can read more about the <Link
                    href="https://docs.orcfax.io/utility-token"
                    isNewTab>token utility</Link
                >
                and <Link href="https://docs.orcfax.io/tokenomics" isNewTab>tokenomics</Link> in our
                docs.
            </p>
        </div>
    </div>
</div>
