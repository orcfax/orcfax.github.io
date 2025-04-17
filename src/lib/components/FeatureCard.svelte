<script lang="ts">
    import { Database, Search, Coins, Globe, ClipboardCheck, ShieldCheck } from "@lucide/svelte";

    interface Feature {
        title: string;
        description: string;
        icon: any; // Lucide icon component
    }

    let features: Feature[] = [
        {
            title: "Flexible & Extensible",
            description:
                "Built to provide access to various types of data feeds supporting both automatic and on-demand publishing.",
            icon: Database,
        },
        {
            title: "Permanently Verifiable",
            description:
                "Every step of the process is independently verifiable, traceable, and provable, ensuring complete transparency forever.",
            icon: Search,
        },
        {
            title: "Cost-effective & Optimized",
            description:
                "Multiple feeds are bundled together and optimized using Cardano's eUTXO model for efficient and predictable transaction costs.",
            icon: Coins,
        },
        {
            title: "Audited & Open-Source",
            description:
                "Our off-chain and on-chain code is open-source and audited by Blink Labs and TxPipe to ensure security, transparency, and trust.",
            icon: ClipboardCheck,
        },
        {
            title: "Best-in-class Archival Standards",
            description:
                "Built by archivists and digital preservation experts, we comply with archival standards for long-term storage and retrieval of data.",
            icon: ShieldCheck,
        },
        {
            title: "Decentralized",
            description:
                "All network operations are executed by a network of validator nodes incentivized by $FACT rather than a single centralized entity.",
            icon: Globe,
        },
    ];
</script>

<div class="">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base/7 font-semibold text-secondary font-mulish">Features</h2>
            <p
                class="mt-2 text-pretty text-4xl font-semibold font-mulish tracking-tight text-secondary sm:text-5xl lg:text-balance"
            >
                Not Just Data — Proof.
            </p>
            <p class="mt-6 text-lg/8 text-secondary font-mulish">
                We take Oracles seriously. Here's what makes us different.
            </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-2">
                {#each features as feature}
                    <div
                        class="relative pl-16 bg-primary/80 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <dt class="text-base/7 font-semibold text-secondary">
                            <svelte:component
                                this={feature.icon}
                                class="absolute left-6 top-7 flex items-center justify-center size-8 text-accentDark"
                            />
                            {feature.title}
                        </dt>
                        <dd class="mt-2 text-base/7 text-secondary">
                            {feature.description}
                        </dd>
                    </div>
                {/each}
            </dl>
        </div>
    </div>
</div>
