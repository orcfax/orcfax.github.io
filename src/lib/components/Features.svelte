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

<div class="pt-2">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl">
            <h1 class="mt-2 text-5xl lg:text-6xl font-bold font-mulish text-secondary text-center">
                Not Just Data — Proof.
            </h1>
            <p class="mt-6 text-lg/8 text-secondary font-mulish text-center">
                We take Oracles seriously. Here's what makes us different.
            </p>
        </div>
        <div class="mx-auto mt-16">
            <dl
                class="grid max-w-2xl mx-auto grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-3"
            >
                {#each features as feature}
                    <div
                        class="card relative bg-card rounded-lg p-6 shadow-sm border border-slate-400 group hover:shadow-lg hover:bg-secondary"
                    >
                        <dt
                            class="text-base font-bold text-secondary group-hover:text-primary flex items-center justify-center gap-2"
                        >
                            <svelte:component
                                this={feature.icon}
                                class="icon-transition flex items-center justify-center size-6 text-accentDark group-hover:text-accent"
                            />
                            <span class="text-transition">{feature.title}</span>
                        </dt>
                        <dd
                            class="text-transition mt-2 text-base/6 text-secondary group-hover:text-primary text-center"
                        >
                            {@html feature.description}
                        </dd>
                    </div>
                {/each}
            </dl>
        </div>
    </div>
</div>

<style>
    .card {
        transition: all 0.1s ease-in-out;
    }

    .card:hover {
        transform: translateY(-2px);
    }

    .text-transition {
        transition: color 0.1s ease-in-out;
    }
</style>
