<script lang="ts">
    import { Database, Search, Coins, Github, ClipboardCheck, ShieldCheck } from "@lucide/svelte";

    interface Feature {
        title: string;
        description: string;
        icon: any; // Lucide icon component
    }

    let features: Feature[] = [
        {
            title: "Multiple Feed Types",
            description:
                "Access various data feeds including price feeds, weather data, and more. Each feed is verified and secured on-chain.",
            icon: Database,
        },
        {
            title: "Independently Verifiable",
            description:
                "Every piece of data is verifiable and traceable from source to on-chain storage, ensuring complete transparency.",
            icon: Search,
        },
        {
            title: "Cost-effective eUTXO Model",
            description:
                "Built on Cardano's eUTXO model for efficient and predictable transaction costs while maintaining security.",
            icon: Coins,
        },
        {
            title: "Open-Source",
            description:
                "Transparent and community-driven development with open-source code available for review and contribution.",
            icon: Github,
        },
        {
            title: "Audited",
            description: "Audited by Blink Labs and TxPipe to ensure security and reliability.",
            icon: ClipboardCheck,
        },
        {
            title: "Best-in-class Archival Standards",
            description: "Archival standards for long-term storage and retrieval of data. ",
            icon: ShieldCheck,
        },
    ];
</script>

<div class="bg-gradient-to-t from-primary to-accentLight py-24 pt-0">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base/7 font-semibold text-secondary">Features</h2>
            <p
                class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-secondary sm:text-5xl lg:text-balance"
            >
                Not Just Data — Proof.
            </p>
            <p class="mt-6 text-lg/8 text-secondary">
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
