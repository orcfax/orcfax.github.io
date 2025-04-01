<script lang="ts">
    import Waves from "$lib/components/Waves.svelte";
    import LaunchExplorer from "$lib/components/LaunchExplorer.svelte";
    import FeatureCard from "$lib/components/FeatureCard.svelte";
    import PingStatus from "$lib/components/PingStatus.svelte";
    import NewTeam from "$lib/components/NewTeam.svelte";
    import SocialProofMarquee from "$lib/components/SocialProofMarquee.svelte";
    import Tokenomics from "$lib/components/Tokenomics.svelte";
    import SectionDivider from "$lib/components/SectionDivider.svelte";
    import Products from "$lib/components/Products.svelte";
    import UseCases from "$lib/components/UseCases.svelte";
    import Separator from "$lib/components/Separator.svelte";
    import ConnectWithUs from "$lib/components/ConnectWithUs.svelte";
    import Footer from "$lib/sections/Footer.svelte";
    import OrcfaxWorkflow from "$lib/components/OrcfaxWorkflow.svelte";
</script>

<div class="h-screen bg-gradient-to-b from-primary to-accentLight/70">
    <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 pl-4 pt-4" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="/" class="-m-1.5 p-1.5 flex items-center">
                    <img class="h-14 w-auto" src="/logo.svg" alt="" />
                    <span class="font-mulish font-black text-4xl ml-1 -mb-4 text-gray-900"
                        >Orcfax</span
                    >
                </a>
            </div>
            <div class="flex lg:hidden">
                <button
                    type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
                <a href="/" class="text-sm/6 font-semibold text-gray-900">Home</a>
                <a href="#features" class="text-sm/6 font-semibold text-gray-900">Features</a>
                <a href="#services" class="text-sm/6 font-semibold text-gray-900">Services</a>
                <a href="#tokenomics" class="text-sm/6 font-semibold text-gray-900">Tokenomics</a>
                <a href="#community" class="text-sm/6 font-semibold text-gray-900">Community</a>
            </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-50"></div>
            <div
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5 flex items-center">
                        <span class="sr-only">Orcfax</span>
                        <img class="h-20 w-auto" src="/logo.svg" alt="" />
                        <span class="font-mulish font-black text-2xl ml-2 text-gray-900"
                            >Orcfax</span
                        >
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                        <span class="sr-only">Close menu</span>
                        <svg
                            class="size-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >Home</a
                            >
                            <a
                                href="#features"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >Features</a
                            >
                            <a
                                href="#workflow"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >Workflow</a
                            >
                            <a
                                href="#tokenomics"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >Tokenomics</a
                            >
                            <a
                                href="#team"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >Team</a
                            >
                            <a
                                href="#connect"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >Connect</a
                            >
                        </div>
                        <div class="py-6">
                            <a
                                href="https://status.orcfax.io"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >Network Status</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
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
                <h1 class="text-6xl font-bold font-mulish text-gray-900">The Oracle of Record</h1>
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
                    <LaunchExplorer />
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
    <Waves />
    <div class="h-24 bg-gradient-to-b from-accent to-accentLight"></div>
    <div id="features">
        <FeatureCard />
    </div>
    <SectionDivider fromColor="from-primary" toColor="to-secondary/10" height="h-24" />
    <div id="workflow">
        <OrcfaxWorkflow />
    </div>
    <!-- <SocialProofMarquee /> -->
    <SectionDivider fromColor="from-secondary/10" toColor="to-primary" height="h-24" />
    <div id="products">
        <Products />
    </div>
    <div id="use-cases">
        <UseCases />
    </div>
    <div id="tokenomics">
        <Tokenomics />
    </div>
    <div class="flex justify-center items-center w-full min-h-10 px-20 flex-col gap-10 bg-primary">
        <Separator gradient={true} />
    </div>
    <div id="team">
        <NewTeam />
    </div>
    <div id="connect">
        <ConnectWithUs />
    </div>
    <Footer />
</div>
