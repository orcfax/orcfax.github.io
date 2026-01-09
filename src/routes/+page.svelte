<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Waves from "$lib/components/Waves.svelte";
  import About from "$lib/components/About.svelte";
  import Solutions from "$lib/components/Solutions.svelte";
  import UseCases from "$lib/components/UseCases.svelte";
  import Tokenomics from "$lib/components/Tokenomics.svelte";
  import Features from "$lib/components/Features.svelte";
  import OrcfaxWorkflow from "$lib/components/OrcfaxWorkflow.svelte";
  import SocialProofMarquee from "$lib/components/SocialProofMarquee.svelte";
  import ValidatorNetwork from "$lib/components/ValidatorNetwork.svelte";
  import OrcfaxTeam from "$lib/components/OrcfaxTeam.svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
  <title>Orcfax – The Blockchain Oracle of Record</title>
  <meta
    name="description"
    content="Orcfax is a decentralized blockchain oracle focused on independent verifiability, permanent archival integrity, and provable auditability raising the bar for trustworthy smart contract data."
  />
  <link rel="canonical" href="https://orcfax.io" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Orcfax",
      "url": "https://orcfax.io",
      "description": "Orcfax is a decentralized blockchain oracle focused on independent verifiability, permanent archival integrity, and provable auditability raising the bar for trustworthy smart contract data.",
      "publisher": {
        "@type": "Organization",
        "name": "Orcfax",
        "url": "https://orcfax.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://orcfax.io/logo.svg",
          "width": 61.52,
          "height": 56
        }
      }
    }
  </script>
</svelte:head>

<div class="h-screen min-w-screen bg-primary">
  <Header />

  <Hero />
  <Waves />

  <div class="flex flex-col bg-primary w-full">
    <div
      class="bg-gradient-to-b from-accent to-accentDark pb-12 pt-28 min-h-screen"
    >
      <section id="about" class="pb-8">
        <About />
      </section>
      <SocialProofMarquee />
    </div>

    <section id="features" class="pb-16 pt-24 bg-primary min-h-screen">
      <Features />
    </section>

    <!-- Top Wave Divider -->
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

    <!-- Bottom Wave Divider -->
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
      <Solutions />
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
  </div>

  <Footer />
</div>
