<script lang="ts">
    import Hero from "$lib/sections/Hero.svelte";
    import Footer from "$lib/sections/Footer.svelte";
    import Waves from "$lib/components/Waves.svelte";
    import About from "$lib/components/About.svelte";
    import Products from "$lib/components/Products.svelte";
    import UseCases from "$lib/components/UseCases.svelte";
    import Separator from "$lib/components/Separator.svelte";
    import Tokenomics from "$lib/components/Tokenomics.svelte";
    import Features from "$lib/components/Features.svelte";
    import OrcfaxWorkflow from "$lib/components/OrcfaxWorkflow.svelte";
    import SocialProofMarquee from "$lib/components/SocialProofMarquee.svelte";
    import ValidatorNetwork from "$lib/components/ValidatorNetwork.svelte";
    import OrcfaxTeam from "$lib/components/OrcfaxTeam.svelte";
    import Header from "$lib/sections/Header.svelte";
</script>

<div class="h-screen min-w-screen bg-primary">
    <Header />

    <Hero />
    <Waves />

    <div class="flex flex-col bg-primary w-full">
        <div class="bg-gradient-to-b from-accent to-accentDark pb-12 pt-28 min-h-screen">
            <section id="about" class="pb-8">
                <About />
            </section>
            <div class="flex flex-col pt-12">
                <h2 class="text-center mt-6 mx-8 text-2xl text-primary font-mulish font-bold">
                    Trusted by Cardano Leaders:
                </h2>
                <SocialProofMarquee />
            </div>
        </div>

        <section id="features" class="pb-16 pt-24 bg-primary min-h-screen">
            <Features />
        </section>

        <div class="bg-primary w-full relative">
            <svg
                class="w-full block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                style="margin-bottom: -1px;"
            >
                <path
                    class="fill-secondary"
                    d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                ></path>
            </svg>
        </div>

        <section id="workflow" class="pt-8 bg-secondary">
            <OrcfaxWorkflow />
        </section>

        <div class="bg-secondary w-full relative">
            <svg
                class="w-full block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                style="margin-bottom: -1px;"
            >
                <path
                    class="fill-primary"
                    d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                ></path>
            </svg>
        </div>

        <section id="solutions" class="pt-8">
            <Products />
        </section>

        <section id="use-cases" class="pt-20">
            <UseCases />
        </section>

        <section id="tokenomics" class="pt-20">
            <Tokenomics />
        </section>

        <section id="validators" class="pt-20">
            <ValidatorNetwork />
        </section>

        <section id="team" class="pt-20">
            <OrcfaxTeam />
        </section>

        <div
            class="flex justify-center items-center w-full min-h-10 px-20 py-10 pt-20 flex-col gap-10 bg-primary"
        >
            <Separator gradient={true} />
        </div>
    </div>

    <Footer />
</div>
