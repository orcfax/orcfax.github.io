<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import PingStatus from "$lib/components/PingStatus.svelte";
    import LatestBlogPost from "$lib/components/LatestBlogPost.svelte";
    import HighlightedText from "$lib/components/HighlightedText.svelte";
</script>

<div class="relative isolate pt-32 pb-20">
    <div class="py-16">
        <div class="text-center">
            <h1 class="text-7xl font-extrabold font-mulish text-secondary">The Oracle of Record</h1>
            <p class="mt-4 mx-auto max-w-3xl text-pretty font-mulish text-base font-medium">
                A decentralized oracle focused on <HighlightedText
                    >independent verifiability</HighlightedText
                >,
                <HighlightedText>permanent archival integrity</HighlightedText>, and
                <HighlightedText>provable auditability</HighlightedText> raising the bar for trustworthy
                smart contract data.
            </p>

            <div class="mt-6 flex items-center justify-center gap-x-6 pb-3">
                <Link href="https://explorer.orcfax.io" isButton isNewTab>Launch Explorer</Link>
                <a
                    href="https://status.orcfax.io"
                    class="group inline-flex items-center justify-center gap-x-2 text-sm/6 font-semibold text-gray-900"
                >
                    <PingStatus color="green" size="sm" />
                    <span class="underline">Network Status</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </a>
            </div>
            <!-- <div class="my-4">
                <LatestBlogPost />
            </div> -->
            <div class="mt-4 flex items-center justify-center gap-x-2 text-gray-900 font-bold">
                <span class="text-base">Built on</span>
                <img src="/cardano-horizontal-black.svg" alt="Cardano" class="h-5 w-auto" />
            </div>
        </div>
    </div>
</div>
