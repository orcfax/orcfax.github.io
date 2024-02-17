<script lang="ts">
    import Countdown from "$lib/components/Countdown.svelte";
    import Link from "$lib/components/Link.svelte";
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
        <Countdown
            targetDate={new Date("2024-02-17T19:00:00Z")}
            activeMessage={"Validator reservation opens in:"}
            endMessage={"Validator reservation is open!"}
            secondaryDate={new Date("2024-02-24T19:00:00Z")}
            secondaryActiveMessage={"Validator reservation closes in:"}
            secondaryEndMessage={"Validator reservation is closed."}
        />
        <a
            class="text-base font-bold underline text-center"
            href="https://medium.com/@orcfax/orcfax-validator-license-announcement-5da07ef1439c"
            target="_blank">Read Announcement and Rules →</a
        >

        <Link href="https://status.orcfax.io/validators" isNewTab isButton>View Leaderboard →</Link>
    </div>
</section>
