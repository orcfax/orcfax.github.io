<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import TokenDetails from "$lib/components/TokenDetails.svelte";
    import TokenDistributionChart from "$lib/components/TokenDistributionChart.svelte";
    import FactToken from "$lib/components/FactToken.svelte";
</script>

<div class="bg-primary w-full px-6 lg:max-w-7xl lg:px-8 flex flex-col items-center">
    <div class="mx-auto max-w-3xl lg:text-center">
        <h1 class="mt-2 text-5xl lg:text-6xl font-bold font-mulish text-secondary text-center">
            Tokenomics
        </h1>
        <p class="mt-6 text-lg/8 text-secondary font-mulish text-center">
            $FACT: Orcfax's Cardano-native Utility Token
        </p>
    </div>

    <div class="flex flex-col xs:flex-row items-start xs:items-center justify-center pt-10 gap-0">
        <div class="w-full xs:w-fit xs:sticky xs:top-0 xs:self-start">
            <div
                class="flex flex-col items-center gap-4 bg-secondary rounded-lg rounded-b-none border border-b-0 border-secondary border-x-0 shadow-lg w-full xs:w-[250px] xs:rounded-r-none xs:rounded-bl-lg md:rounded-lg"
            >
                <FactToken />
                <TokenDetails />
            </div>
        </div>
        <div
            class="flex flex-col gap-6 bg-card border border-slate-400 rounded-lg rounded-t-none shadow-lg w-full xs:max-w-3xl p-6 sm:p-10 xs:rounded-r-lg xs:border-l-0 xs:rounded-l-none"
        >
            <div class="flex flex-col gap-4">
                <h1 class="text-2xl font-bold font-mulish text-secondary">$FACT Token</h1>
                <div class="flex flex-col gap-4">
                    <p class="text-gray-600 max-w-xl">
                        $FACT is the Cardano-native utility token for Orcfax's ecosystem. It has
                        necessary function and utility and is used for oracle data publication,
                        staking by our data validator nodes, validator network incentivization, and
                        voting power in future DAO governance decisions.
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <p class="text-gray-600 max-w-xl">
                    The $FACT token was <Link
                        href="https://medium.com/@orcfax/orcfax-token-launch-in-collaboration-with-wingriders-launchpad-39d63da2b379"
                        isNewTab>made available</Link
                    > on the open market via the Wingriders Launchpad on 2023-09-08 and was distributed
                    as follows:
                </p>
                <div
                    class="max-w-[200px] h-[400px] xs:h-[400px] xs:w-[200px] sm:max-w-none sm:w-[300px] sm:h-[500px] md:w-[450px] md:h-[300px] relative self-center"
                >
                    <TokenDistributionChart />
                </div>
                <p class="text-gray-600 max-w-xl">
                    You can read more about the <Link
                        href="https://docs.orcfax.io/utility-token"
                        isNewTab>utility token</Link
                    >
                    and <Link href="https://docs.orcfax.io/tokenomics" isNewTab>tokenomics</Link> in
                    our docs.
                </p>
            </div>
        </div>
    </div>
</div>
