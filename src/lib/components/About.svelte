<script lang="ts">
    import DataSource from "$lib/components/icons/DataSource.svelte";
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8 lg:text-center">
    <div class="flex flex-col items-center gap-x-2">
        <DataSource fillColor="fill-secondary" height="50" width="50" />
        <h2 class="mt-2 text-5xl font-bold font-mulish text-secondary">What is Orcfax?</h2>
    </div>
    <div class="mt-8">
        <div class="space-y-6 text-lg/8 text-secondary font-mulish max-w-4xl mx-auto">
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
