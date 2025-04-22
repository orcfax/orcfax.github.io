<script lang="ts">
    import DataSource from "$lib/components/icons/DataSource.svelte";
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8 lg:text-center">
    <div class="flex flex-col items-center gap-y-4">
        <DataSource fillColor="fill-primary" height="50" width="50" />
        <h1 class="mt-2 text-6xl font-bold font-mulish text-primary">What is Orcfax?</h1>
    </div>
    <div class="mt-8">
        <div class="space-y-6 text-primary font-mulish max-w-3xl mx-auto">
            <p>
                Orcfax is a decentralized blockchain oracle. A chain is only as strong as its
                weakest link and the weakest link of blockchains is their connection to the
                (off-chain) real world. Oracles bridge this gap by bringing off-chain data on-chain,
                but that's only part of the solution. The data also must be trustworthy, verifiably
                accurate, authentic, and factual. This is commonly referred to as the
                <a
                    href="https://docs.orcfax.io/oracle-basics#what-is-the-oracle-problem"
                    target="_blank"
                    class="underline"
                >
                    oracle problem
                </a>.
            </p>
            <p>Orcfax is not just an oracle.</p>
            <p class="font-bold">
                It's a decentralized truth machine for verifiable, auditable, and permanent
                statements of fact.
            </p>
        </div>
    </div>
</div>
