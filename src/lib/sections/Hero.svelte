<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import PingStatus from "$lib/components/PingStatus.svelte";
    import LatestBlogPost from "$lib/components/LatestBlogPost.svelte";
</script>

<div class="relative isolate px-6 pt-14 lg:px-8">
    <div class="ml-16 max-w-2xl py-16">
        <div class="mt-24 mb-4 sm:mt-32 lg:mt-16">
            <LatestBlogPost />
        </div>

        <div class="text-left">
            <h1 class="text-6xl font-bold font-mulish text-secondary">The Oracle of Record</h1>
            <p class="mt-4 text-pretty font-mulish text-base font-medium text-gray-500">
                A decentralized oracle focused on <strong>independent verifiability</strong>,
                <strong>permanent archival integrity</strong>, and
                <strong>provable auditability</strong> raising the bar for trustworthy smart contract
                data.
            </p>
            <div class="mt-4 flex items-center gap-x-2 text-gray-900 font-bold">
                <span class="text-base">Built on</span>
                <img src="/cardano-horizontal-black.svg" alt="Cardano" class="h-5 w-auto" />
            </div>
            <div class="mt-6 flex items-center justify-start gap-x-6 pb-10">
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
        </div>
    </div>
</div>
