<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import TokenDetails from "$lib/components/TokenDetails.svelte";
    import TokenDistributionChart from "$lib/components/TokenDistributionChart.svelte";
    import FactToken from "$lib/components/FactToken.svelte";
    import LogoLinkGroup from "$lib/components/LogoLinkGroup.svelte";
</script>

<div class="bg-primary">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div class="mx-auto max-w-3xl lg:text-center">
            <h1 class="mt-2 text-6xl font-bold font-mulish text-secondary">Tokenomics</h1>
            <p class="mt-6 text-lg/8 text-secondary font-mulish">
                $FACT: Orcfax's Cardano-native Utility Token
            </p>
        </div>

        <div class="flex items-center justify-center w-full pt-10">
            <div class="flex flex-col items-center gap-4 bg-secondary rounded-lg border shadow-lg">
                <FactToken />
                <TokenDetails />
            </div>
            <div
                class="flex flex-col gap-6 bg-card border border-slate-400 p-10 rounded-r-lg border-l-0"
            >
                <div class="flex flex-col gap-2">
                    <h1 class="mt-2 text-2xl font-bold font-mulish text-secondary">$FACT Token</h1>
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
