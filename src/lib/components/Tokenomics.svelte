<script lang="ts">
    import Token from "$lib/sections/Token.svelte";
    import TokenDistribution from "$lib/components/TokenDistribution.svelte";
    import ValidatorNodeNFT from "$lib/components/ValidatorNodeNFT.svelte";
    import PageSection from "$lib/components/PageSection.svelte";
</script>

<PageSection id="tokenomics" class="bg-primary">
    <div class="flex flex-col gap-12 w-full">
        <h2>Tokenomics</h2>

        <!-- Token Section -->
        <!-- <div class="mt-8">
            <h3 class="text-2xl mb-6">$FACT Token</h3>
            <Token />
        </div> -->

        <!-- Token Distribution Component -->
        <div class="mt-8">
            <h3 class="text-2xl mb-6">Token Distribution</h3>
            <TokenDistribution />
        </div>

        <!-- Validator License Component -->
        <!-- <div class="mt-8 mb-16">
            <h3 class="text-2xl mb-6">Validator License</h3>
            <p class="text-lg max-w-xl mb-8">
                Orcfax validators are required to stake $FACT tokens to participate in the network.
                This ensures validators have skin in the game and are incentivized to provide
                accurate data.
            </p>
            <div class="flex justify-center">
                <ValidatorNodeNFT />
            </div>
        </div> -->
    </div>
</PageSection>
