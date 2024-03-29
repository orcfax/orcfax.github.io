<script lang="ts">
    import { pluralize } from "$lib";
    import {
        differenceInDays,
        differenceInHours,
        differenceInMinutes,
        differenceInSeconds,
    } from "date-fns";
    import { onMount, onDestroy } from "svelte";
    import { blur } from "svelte/transition";

    export let targetDate: Date;
    export let activeMessage: string;
    export let endMessage: string;
    export let secondaryDate: Date | undefined;
    export let secondaryActiveMessage: string | undefined;
    export let secondaryEndMessage: string | undefined;

    let hasDatePassed = false;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    let intervalId: ReturnType<typeof setInterval>;

    const updateCountdown = () => {
        const now = new Date();
        const totalSeconds = differenceInSeconds(targetDate, now);

        if (totalSeconds <= 0) {
            clearInterval(intervalId);
            hasDatePassed = true;
        } else {
            days = differenceInDays(targetDate, now);
            hours = differenceInHours(targetDate, now) % 24;
            minutes = differenceInMinutes(targetDate, now) % 60;
            seconds = totalSeconds % 60;
        }
    };

    onMount(() => {
        updateCountdown();
        intervalId = setInterval(updateCountdown, 1000); // Update every second
    });

    onDestroy(() => {
        clearInterval(intervalId);
    });
</script>

{#if hasDatePassed && secondaryDate}
    <svelte:self
        targetDate={secondaryDate}
        activeMessage={secondaryActiveMessage}
        endMessage={secondaryEndMessage}
    />
{:else if hasDatePassed}
    <div class="text-2xl font-black text-center -mb-8" transition:blur>{endMessage}</div>
{:else}
    <div
        class="flex flex-col gap-4 sm:gap-2 justify-center max-w-[16rem] md:max-w-full"
        transition:blur
    >
        <p class="text-2xl xs:text-2xl sm:text-2xl lg:text-3xl font-black text-center w-full">
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
