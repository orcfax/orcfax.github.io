<script lang="ts">
    import { preventDefault } from "svelte/legacy";

    import Copy from "./../components/icons/Copy.svelte";
    import Copying from "./../components/icons/Copying.svelte";
    import Link from "$lib/components/Link.svelte";
    import ValidatorLicense from "$lib/components/ValidatorLicense.svelte";
    import SupportedDEXes from "$lib/components/DEXes.svelte";
    import BlockExplorers from "$lib/components/BlockExplorers.svelte";

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

<div class="bg-primary">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-center text-base/7 font-semibold text-secondary font-mulish">Validators</h2>
        <p
            class="mx-auto mt-2 max-w-3xl text-balance text-center text-5xl font-semibold font-mulish tracking-tight text-secondary"
        >
            Orcfax Validator License
        </p>

        <div class="flex flex-col items-center justify-around gap-12 pt-20">
            <div
                class="flex flex-col lg:flex-row items-center gap-4 bg-secondary/95 rounded-lg p-8 border shadow-lg"
            >
                <ValidatorLicense />
                <div class="flex flex-col gap-4">
                    <h4 class="font-semibold text-lg">Policy ID:</h4>
                    <div class="flex flex-row items-center">
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
                            Purchase Validator Node NFT →
                        </Link>
                    </div>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row justify-evenly gap-8">
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
                    <div class="flex flex-col items-center">
                        <div class="flex flex-col">
                            <h2 class="text-2xl font-semibold font-mulish text-secondary">
                                Availability
                            </h2>
                            <p class="mt-2 text-gray-600 max-w-md">
                                The Validator License <Link
                                    href="https://medium.com/@orcfax/orcfax-token-launch-in-collaboration-with-wingriders-launchpad-39d63da2b379"
                                    isNewTab>was made available</Link
                                > on the open market via the Wingriders Launchpad.
                            </p>
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
                    href="https://docs.orcfax.io/validator-node-nft"
                    isNewTab>Validator License utility</Link
                >
                and <Link href="https://docs.orcfax.io/tokenomics" isNewTab>tokenomics</Link> in our
                docs.
            </p>
        </div>
    </div>
</div>
