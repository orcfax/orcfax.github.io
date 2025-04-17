<script lang="ts">
    import Copy from "$lib/components/icons/Copy.svelte";
    import Copying from "$lib/components/icons/Copying.svelte";
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
    <div class="flex flex-col mb-4">
        <h4 class="font-semibold text-lg">Token Details</h4>
        <a
            href="https://cardanoscan.io/tokenPolicy/a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e51"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-primary/80 hover:text-primary flex items-center gap-1"
        >
            View on Cardanoscan
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-external-link"
                ><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline
                    points="15 3 21 3 21 9"
                ></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg
            >
        </a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="flex flex-col">
            <span class="text-sm">Ticker</span>
            <span class="font-medium">FACT</span>
        </div>
        <div class="flex flex-col">
            <span class="text-sm">Name</span>
            <span class="font-medium">Orcfax Token</span>
        </div>
        <div class="flex flex-col">
            <span class="text-sm">Asset Name</span>
            <span class="font-medium">orcfaxtoken</span>
            <span class="text-xs">6f7263666178746f6b656e</span>
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
        </div>

        <div class="flex flex-col">
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
        </div>
        <div class="flex flex-col">
            <span class="text-sm">Total Supply</span>
            <span class="font-medium">1 Billion</span>
        </div>
    </div>
</div>
