<script lang="ts">
    import Hero from "$lib/sections/Hero.svelte";
    import Footer from "$lib/sections/Footer.svelte";
    import Waves from "$lib/components/Waves.svelte";
    import NewTeam from "$lib/components/NewTeam.svelte";
    import Products from "$lib/components/Products.svelte";
    import UseCases from "$lib/components/UseCases.svelte";
    import Separator from "$lib/components/Separator.svelte";
    import Tokenomics from "$lib/components/Tokenomics.svelte";
    import FeatureCard from "$lib/components/FeatureCard.svelte";
    import ConnectWithUs from "$lib/components/ConnectWithUs.svelte";
    import SectionDivider from "$lib/components/SectionDivider.svelte";
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
                <a href="#products" class="text-sm/6 font-semibold text-gray-900">Products</a>
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
                                href="#community"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >Community</a
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

    <Hero />
    <Waves />

    <div class="flex flex-col bg-primary w-full">
        <section id="features" class="pb-8">
            <FeatureCard />
        </section>

        <SectionDivider fromColor="from-primary" toColor="to-secondary/10" height="h-24" />

        <section id="workflow" class="pt-8 bg-secondary">
            <OrcfaxWorkflow />
        </section>

        <svg
            class="w-full bg-secondary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            style=""
        >
            <path
                class="fill-primary shadow-2xl"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
        </svg>

        <section id="products" class="pt-8">
            <Products />
        </section>

        <section id="use-cases" class="pt-20">
            <UseCases />
        </section>

        <div
            class="flex justify-center items-center w-full min-h-10 px-20 py-16 flex-col gap-10 bg-primary"
        >
            <Separator gradient={true} />
        </div>

        <section id="tokenomics">
            <Tokenomics />
        </section>

        <div
            class="flex justify-center items-center w-full min-h-10 px-20 py-20 flex-col gap-10 bg-primary"
        >
            <Separator gradient={true} />
        </div>

        <!-- <section id="team">
            <NewTeam />
        </section> -->

        <section id="community">
            <ConnectWithUs />
        </section>
    </div>

    <Footer />
</div>
