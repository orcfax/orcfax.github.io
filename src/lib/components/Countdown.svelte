<script lang="ts">
    import { pluralize } from "$lib";
    import { time } from "$lib/stores";
    import {
        differenceInDays,
        differenceInHours,
        differenceInMinutes,
        differenceInSeconds,
    } from "date-fns";
    import { blur } from "svelte/transition";

    export let targetDate: Date;
    export let activeMessage: string;
    export let endMessage: string;
    export let secondaryDate: Date | undefined = undefined;
    export let secondaryActiveMessage: string | undefined = undefined;
    export let secondaryEndMessage: string | undefined = undefined;

    $time;
    $: totalSeconds = differenceInSeconds(targetDate, $time);
    $: hasDatePassed = totalSeconds <= 0 ? true : false;
    $: days = differenceInDays(targetDate, $time);
    $: hours = differenceInHours(targetDate, $time) % 24;
    $: minutes = differenceInMinutes(targetDate, $time) % 60;
    $: seconds = totalSeconds % 60;
</script>

{#if hasDatePassed && secondaryDate}
    <svelte:self
        targetDate={secondaryDate}
        activeMessage={secondaryActiveMessage}
        endMessage={secondaryEndMessage}
    />
{:else if hasDatePassed}
    <div class="text-xl sm:text-2xl font-black text-center" transition:blur>{endMessage}</div>
{:else}
    <div
        class="flex flex-col gap-4 sm:gap-2 justify-center items-center max-w-[16rem] md:max-w-full"
        transition:blur
    >
        <p class="text-xl sm:text-2xl font-black text-center w-full">
            {activeMessage}
        </p>
        <div class="flex gap-5 font-semibold">
            <div>
                <span class="countdown text-2xl md:text-3xl">
                    <span class="text-accent font-extrabold" style={`--value:${days};`} />
                </span>
                <span class="text-base-content-100 opacity-60 text-xl md:text-2xl"
                    >{pluralize("day", days)}</span
                >
            </div>
            <div>
                <span class="countdown text-2xl md:text-3xl">
                    <span class="text-accent font-extrabold" style={`--value:${hours};`} />
                </span>
                <span class="text-base-content-100 opacity-60 text-xl md:text-2xl"
                    >{pluralize("hour", hours)}</span
                >
            </div>
            <div>
                <span class="countdown text-2xl md:text-3xl">
                    <span class="text-accent font-extrabold" style={`--value:${minutes};`} />
                </span>
                <span class="text-base-content-100 opacity-60 text-xl md:text-2xl"
                    >{pluralize("min", minutes)}</span
                >
            </div>
            <div>
                <span class="countdown text-2xl md:text-3xl">
                    <span class="text-accent font-extrabold" style={`--value:${seconds};`} />
                </span>
                <span class="text-base-content-100 opacity-60 text-xl md:text-2xl"
                    >{pluralize("sec", seconds)}</span
                >
            </div>
        </div>
    </div>
{/if}
