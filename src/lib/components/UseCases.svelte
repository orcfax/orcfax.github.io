<script lang="ts">
    import { MessageCircleWarning, Database, Nfc, SpellCheck } from "@lucide/svelte";

    interface UseCase {
        title: string;
        description: string;
        icon: any; // Lucide icon component
    }

    let useCases: UseCase[] = [
        {
            title: "Real-World Event Triggers",
            description:
                "Trigger smart-contracts based on real-world events, such as the completion of a task, the arrival of a shipment, or the fulfillment of an order.",
            icon: Nfc,
        },
        {
            title: "Data Validation",
            description:
                "Validate data from off-chain sources, such as weather forecasts, news articles, or social media, before it is added to the blockchain.",
            icon: SpellCheck,
        },
        {
            title: "Dispute Resolution",
            description:
                "When the smart-contract isn't enough, Orcfax creates trust through the archival bond. Storing data from its processes on an L0 archive to enable dispute resolution on a long timeline.",
            icon: MessageCircleWarning,
        },
    ];
</script>

<div class="bg-primary">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-center text-base/7 font-semibold text-secondary font-mulish">Use Cases</h2>
        <p
            class="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold font-mulish tracking-tight text-secondary sm:text-5xl"
        >
            When Trust and Proof are non-negotiable.
        </p>

        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {#each useCases as useCase}
                    <div class="flex flex-col">
                        <dt class="text-base/7 font-semibold text-gray-900">
                            <div
                                class="mb-6 flex size-10 items-center justify-center rounded-lg bg-accent"
                            >
                                <svelte:component this={useCase.icon} class="size-6 text-white" />
                            </div>
                            {useCase.title}
                        </dt>
                        <dd class="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                            <p class="flex-auto">
                                {useCase.description}
                            </p>
                        </dd>
                    </div>
                {/each}
            </dl>
        </div>
    </div>
</div>
