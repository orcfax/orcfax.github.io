<script lang="ts">
    import Countdown from "./Countdown.svelte";
    import { pluralize } from "$lib";
    import { time } from "$lib/stores";
    import {
        differenceInDays,
        differenceInHours,
        differenceInMinutes,
        differenceInSeconds,
    } from "date-fns";
    import { blur } from "svelte/transition";

    interface Props {
        targetDate: Date;
        activeMessage: string;
        endMessage: string;
        secondaryDate?: Date;
        secondaryActiveMessage?: string;
        secondaryEndMessage?: string;
    }

    let {
        targetDate,
        activeMessage,
        endMessage,
        secondaryDate,
        secondaryActiveMessage,
        secondaryEndMessage,
    }: Props = $props();

    $time;
    let totalSeconds = $derived(differenceInSeconds(targetDate, $time));
    let hasDatePassed = $derived(totalSeconds <= 0 ? true : false);
    let days = $derived(differenceInDays(targetDate, $time));
    let hours = $derived(differenceInHours(targetDate, $time) % 24);
    let minutes = $derived(differenceInMinutes(targetDate, $time) % 60);
    let seconds = $derived(totalSeconds % 60);
</script>

{#if hasDatePassed && secondaryDate && secondaryActiveMessage && secondaryEndMessage}
    <Countdown
        targetDate={secondaryDate}
        activeMessage={secondaryActiveMessage}
        endMessage={secondaryEndMessage}
    />
{:else if hasDatePassed}
    <div class="text-xl sm:text-2xl font-bold text-center" transition:blur>{endMessage}</div>
{:else}
    <div
        class="flex flex-col gap-2 justify-center items-center max-w-[16rem] md:max-w-full"
        transition:blur
    >
        <p class="text-xl sm:text-2xl font-bold text-center w-full">
            {activeMessage}
        </p>
        <div class="flex gap-5 font-semibold">
            <div class="flex flex-col">
                <span class="countdown text-2xl md:text-3xl">
                    <span class="text-accent font-extrabold" style={`--value:${days};`}></span>
                </span>
                <span class="text-base-content-100 opacity-60 text-xl md:text-2xl"
                    >{pluralize("day", days)}</span
                >
            </div>
            <div class="flex flex-col">
                <span class="countdown text-2xl md:text-3xl">
                    <span class="text-accent font-extrabold" style={`--value:${hours};`}></span>
                </span>
                <span class="text-base-content-100 opacity-60 text-xl md:text-2xl"
                    >{pluralize("hour", hours)}</span
                >
            </div>
            <div class="flex flex-col">
                <span class="countdown text-2xl md:text-3xl">
                    <span class="text-accent font-extrabold" style={`--value:${minutes};`}></span>
                </span>
                <span class="text-base-content-100 opacity-60 text-xl md:text-2xl"
                    >{pluralize("min", minutes)}</span
                >
            </div>
            <div class="flex flex-col">
                <span class="countdown text-2xl md:text-3xl">
                    <span class="text-accent font-extrabold" style={`--value:${seconds};`}></span>
                </span>
                <span class="text-base-content-100 opacity-60 text-xl md:text-2xl"
                    >{pluralize("sec", seconds)}</span
                >
            </div>
        </div>
    </div>
{/if}
