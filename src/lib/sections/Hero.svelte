<script lang="ts">
    import Countdown from "$lib/components/Countdown.svelte";
    import Link from "$lib/components/Link.svelte";
    import { time } from "$lib/stores";

    $time;
    $: whitelistedMintingStartDate = new Date("2024-04-15T18:00:00Z");
    $: whitelistedMintingEndDate = new Date("2024-04-18T18:00:00Z");
    $: isAfterWhitelistedEndDate = $time > whitelistedMintingEndDate;

    $: firstComeFirstServeMintingStartDate = new Date("2024-04-19T18:00:00Z");
    $: isAfterFirstComeFirstServeStartDate = $time > firstComeFirstServeMintingStartDate;
</script>

<section class="flex flex-col justify-center items-center pt-8 grow">
    <Link
        href="#about"
        class="text-[5rem] xs:text-[6.5rem] sm:text-[8rem] lg:text-[12rem] h-min leading-snug tracking-wide font-black hover:underline"
    >
        Orcfax
    </Link>

    <h2
        class="text-center max-w-xs xs:max-w-sm sm:max-w-md text-xl xs:text-2xl sm:text-3xl lg:text-4xl lg:max-w-lg font-bold"
    >
        Decentralized oracle feeds for Cardano smart contracts
    </h2>
    <div class="flex flex-col items-center pt-8 gap-5 sm:gap-8">
        {#if !isAfterWhitelistedEndDate}
            <Countdown
                targetDate={whitelistedMintingStartDate}
                activeMessage={"Whitelisted license minting opens in:"}
                endMessage={"Whitelisted license minting is open!"}
                secondaryDate={whitelistedMintingEndDate}
                secondaryActiveMessage={"Whitelisted license minting closes in:"}
                secondaryEndMessage={"Whitelisted license minting is closed!"}
            />
        {:else if !isAfterFirstComeFirstServeStartDate}
            <Countdown
                targetDate={firstComeFirstServeMintingStartDate}
                activeMessage={"Unreserved license minting opens in:"}
                endMessage={"Unreserved license minting is open!"}
            />
        {:else}
            <div class="text-2xl text-center mb-4 font-black">
                Validator license minting is open!
            </div>
        {/if}

        <Link href="https://status.orcfax.io/validators" isNewTab isButton
            >View Validator Details →</Link
        >
    </div>
</section>
