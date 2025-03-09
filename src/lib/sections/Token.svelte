<script lang="ts">
    import { preventDefault } from 'svelte/legacy';

    import Copy from "./../components/icons/Copy.svelte";
    import Copying from "./../components/icons/Copying.svelte";
    import Link from "$lib/components/Link.svelte";
    import FactToken from "$lib/components/FactToken.svelte";
    import PageSection from "$lib/components/PageSection.svelte";

    let isCopying = $state(false);
    function handleCopyToClipboard() {
        const policyID = "a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e51";
        navigator.clipboard.writeText(policyID);
        isCopying = true;
        setTimeout(() => {
            isCopying = false;
        }, 1000);
        return;
    }
</script>

<PageSection id="token" class="bg-primary pb-32">
    <div class="flex flex-col gap-6 w-full">
        <h2>$FACT Token</h2>

        <div class="flex flex-col items-center w-full lg:flex-row lg:justify-between">
            <div class="flex flex-col gap-8 w-full">
                <div>
                    <p class="mb-0 pb-0 font-bold">
                        The Orcfax Cardano-native utility token is used for:
                    </p>
                    <ol class="pl-8">
                        <li class="list-decimal">Payment for on-demand, oracle data publication</li>
                        <li class="list-decimal">Staking by our data validator nodes</li>
                        <li class="list-decimal">Reward payments to validators</li>
                        <li class="list-decimal">
                            Voting power in Orcfax DAO governance decisions
                        </li>
                    </ol>
                </div>

                <p>
                    You can read more about the <Link
                        href="https://docs.orcfax.io/utility-token"
                        isNewTab>$FACT token utility</Link
                    >
                    and <Link href="https://docs.orcfax.io/tokenomics" isNewTab>tokenomics</Link> in
                    our docs.
                </p>
                <p>
                    The $FACT token <Link
                        href="https://medium.com/@orcfax/orcfax-token-launch-in-collaboration-with-wingriders-launchpad-39d63da2b379"
                        isNewTab>was made available</Link
                    > on the open market via the Wingriders Launchpad.
                </p>
            </div>
            <div
                class="flex flex-col justify-center items-center w-full pt-10 gap-10 sm:flex-row sm:justify-between lg:flex-col lg:pt-0 lg:w-min lg:gap-0 lg:pl-6 lg:-mt-24"
            >
                <FactToken />
                <div class="w-max sm:w-auto mx-auto flex-grow">
                    <h4 class="font-semibold text-lg">Policy ID:</h4>
                    <div class="flex flex-row items-center mx-auto w-max sm:w-auto">
                        <Link
                            href="https://cexplorer.io/policy/a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e51"
                            isNewTab>a3931691...2a6c1e51</Link
                        >
                        <button
                            class="flex items-center justify-center relative group -mt-4 ml-2 h-9 w-9"
                            onclick={preventDefault(handleCopyToClipboard)}
                        >
                            {#if isCopying}
                                <Copying />
                            {:else}
                                <Copy />
                            {/if}
                        </button>
                    </div>
                    <div class="w-full flex pt-4">
                        <Link
                            href="https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e516f7263666178746f6b656e"
                            isNewTab
                            isButton
                        >
                            Trade $FACT →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</PageSection>
