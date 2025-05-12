<script lang="ts">
    import DataSource from "$lib/components/icons/DataSource.svelte";
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8 lg:text-center">
    <div class="flex flex-col items-center gap-y-4">
        <DataSource fillColor="fill-primary" height="50" width="50" />
        <h1 class="mt-2 text-5xl lg:text-6xl font-bold font-mulish text-primary text-center">
            What is Orcfax?
        </h1>
    </div>
    <div class="mt-8">
        <div class="space-y-6 text-primary font-mulish max-w-2xl mx-auto text-center">
            <p>Orcfax is a decentralized blockchain oracle.</p>
            <p>
                A chain is only as strong as its weakest link and the weakest link, and for
                blockchains, and for blockchains, that link is their connection to the off-chain
                world.
            </p>
            <p>
                Oracles bridge this gap by bringing external data on-chain. But that’s only part of
                the solution; the data must also be trustworthy, verifiably accurate, authentic, and
                factual. This challenge is known as the <a
                    href="https://docs.orcfax.io/oracle-basics#what-is-the-oracle-problem"
                    target="_blank"
                    class="underline"
                >
                    oracle problem
                </a>.
            </p>
            <p>Orcfax is more than just an oracle.</p>
            <p class="font-bold">
                It's a decentralized truth machine for verifiable, auditable, and permanent
                statements of fact.
            </p>
        </div>
    </div>
</div>
