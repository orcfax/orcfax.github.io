<script>
    import Marquee from "./Marquee.svelte";
    import SocialProofCard from "./SocialProofCard.svelte";

    const reviews = [
        {
            name: "Cardano Foundation",
            username: "@Cardano_CF",
            body: "Orcfax, led by a team of archivists, is advancing decentralized data solutions, bringing decades of storage and retrieval experience into the Cardano ecosystem. 🐋",
            img: "/integrators/cardanofoundation.png",
        },
        {
            name: "Fluid Tokens",
            username: "@FluidTokens",
            body: "You don’t need to trust Fluid at any point, and that’s the beauty of it.",
            img: "/integrators/fluidtokens.jpg",
        },
        {
            name: "Input Output",
            username: "@InputOutputHK",
            body: "This month’s Essential Cardano360 went live and welcomed @VyFiOfficial and @orcfax to the show",
            img: "/integrators/inputoutput.jpg",
        },
        {
            name: "Big BLYMP",
            username: "@bigblymp",
            body: "Decentralised Oracles do exist in DeFi. It's why we're partnering with @orcfax",
            img: "/integrators/bigblymp.jpg",
        },
        {
            name: "Obymare",
            username: "@obymare",
            body: "Orcfax is the only oracle with the technical credibility and ideological alignment to power a protocol like Obymare.",
            img: "/integrators/obymare.jpg",
        },
        {
            name: "Nuvola",
            username: "@NuvolaDigital",
            body: "Nuvola remains committed to supporting @orcfax and participating in all upcoming ITN phases!",
            img: "/integrators/nuvola.jpg",
        },
        {
            name: "Xerberus",
            username: "@Xerberus_io",
            body: "With @Orcfax, we’re building a trusted on-chain risk explorer—verified, and accessible to all.",
            img: "/integrators/xerberus.jpg",
        },
        {
            name: "Yamfore",
            username: "@yamfore",
            body: "We’re excited to announce our official partnership with @orcfax! 🐋🤝",
            img: "/integrators/yamfore.jpg",
        },
    ];

    let firstRow = reviews.slice(0, reviews.length);
</script>

<div class="flex flex-col pt-12">
    <h2 class="text-center mt-6 mx-8 text-2xl text-primary font-mulish font-bold">
        Trusted by Cardano Leaders:
    </h2>
    <div
        class="relative flex h-64 w-full flex-col items-center justify-center overflow-hidden rounded-lg"
    >
        <Marquee class="[--duration:40s] justify-center items-center py-4">
            {#each firstRow as item}
                <SocialProofCard {...item} />
            {/each}
        </Marquee>

        <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
        <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
    </div>
</div>
