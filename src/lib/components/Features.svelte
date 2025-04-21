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
                "All off-chain and on-chain code is open-source and <a href='https://docs.orcfax.io/f12-audit' class='underline text-base/6' target='_blank'>audited</a> by Blink Labs and TxPipe to ensure security, and trust.",
            icon: ClipboardCheck,
        },
        {
            title: "Leading Archival Practices",
            description:
                "Built by archivists and digital preservation experts, we comply with archival standards for a long-term recordkeeping system.",
            icon: ShieldCheck,
        },
        {
            title: "Decentralized Architecture",
            description:
                "All network operations are executed by a network of validator nodes incentivized by $FACT rather than a centralized entity.",
            icon: Globe,
        },
    ];
</script>

<div class="">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="mt-2 text-5xl font-bold font-mulish text-secondary">
                Not Just Data — Proof.
            </h2>
            <p class="mt-6 text-lg/8 text-secondary font-mulish">
                We take Oracles seriously. Here's what makes us different.
            </p>
        </div>
        <div class="mx-auto mt-16">
            <dl class="grid max-w-xl grid-cols-1 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-3">
                {#each features as feature}
                    <div
                        class="relative bg-card rounded-lg p-6 shadow-sm border border-slate-400 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <dt
                            class="text-base font-bold text-secondary flex items-center justify-center gap-2"
                        >
                            <svelte:component
                                this={feature.icon}
                                class="flex items-center justify-center size-6 text-accentDark"
                            />
                            <span>{feature.title}</span>
                        </dt>
                        <dd class="mt-2 text-base/6 text-secondary text-center">
                            {@html feature.description}
                        </dd>
                    </div>
                {/each}
            </dl>
        </div>
    </div>
</div>
