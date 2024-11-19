<script lang="ts">
    import Countdown from "$lib/components/Countdown.svelte";
    import Link from "$lib/components/Link.svelte";
    import { time } from "$lib/stores";

    $time;
    $: itnPhase1StartDate = new Date("2024-12-02T00:00:00Z");
    $: isAfterItnPhase1StartDate = $time > itnPhase1StartDate;
</script>

<section class="flex flex-col justify-center items-center pt-8 grow">
    <Link
        href="#about"
        class="text-[5rem] xs:text-[6.5rem] sm:text-[8rem] lg:text-[8rem] h-min leading-snug tracking-wide font-black hover:underline"
    >
        Orcfax
    </Link>

    <h2
        class="text-center max-w-xs xs:max-w-sm sm:max-w-md text-xl xs:text-2xl sm:text-3xl lg:max-w-lg font-bold"
    >
        Decentralized oracle feeds for Cardano smart contracts
    </h2>
    <div class="flex flex-col items-center pt-4 sm:pt-8 gap-5 sm:gap-8">
        <div class="text-xl sm:text-2xl text-center font-black px-2">
            Orcfax v1 is live on Mainnet!
        </div>

        <div class="flex flex-col justify-center items-center">
            {#if !isAfterItnPhase1StartDate}
                <Countdown
                    targetDate={itnPhase1StartDate}
                    activeMessage={"ITN Phase 1 starts in:"}
                    endMessage={"ITN Phase 1 is live!"}
                />
            {:else}
                <div class="text-2xl text-center mb-4 font-bold">ITN Phase 1 is live!</div>
            {/if}

            <Link
                href="https://medium.com/@orcfax/orcfax-itn-phase-1-a-guide-for-validators-5b35d81e189d"
                isNewTab
            >
                ITN Phase 1 Guide →
            </Link>
        </div>

        <Link href="https://explorer.orcfax.io/" isNewTab isButton>Launch Explorer →</Link>
    </div>
</section>
