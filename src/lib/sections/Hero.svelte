<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import PingStatus from "$lib/components/PingStatus.svelte";
</script>

<div class="relative isolate px-6 pt-14 lg:px-8">
    <div class="ml-16 max-w-2xl py-16">
        <div class="mt-24 mb-4 sm:mt-32 lg:mt-16">
            <a
                href="https://medium.com/@orcfax/orcfax-update-9-b03f13ea438e"
                target="_blank"
                class="inline-flex space-x-3 justify-start"
            >
                <span
                    class="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent ring-1 ring-inset ring-accent/60"
                >
                    What's New
                </span>
                <span
                    class="inline-flex items-center space-x-2 text-sm font-medium text-secondary/60"
                >
                    <span>Read Orcfax Update #9</span>
                    <svg
                        class="size-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </span>
            </a>
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
