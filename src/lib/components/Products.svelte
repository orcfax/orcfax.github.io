<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import Ripple from "./Ripple.svelte";
    import Sonar from "./Sonar.svelte";
</script>

<div class="bg-primary">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div class="mx-auto max-w-3xl lg:text-center">
            <h1 class="mt-2 text-6xl font-bold font-mulish text-secondary">
                Products and Integrations
            </h1>
            <p class="mt-6 text-lg/8 text-secondary font-mulish">
                The data and proof you need, flexibly delivered.
            </p>
        </div>

        <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div class="relative lg:row-span-2">
                <div class="absolute inset-px rounded-lg bg-card lg:rounded-l-[2rem]"></div>
                <div
                    class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]"
                >
                    <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                        <p
                            class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"
                        >
                            Data Feeds
                        </p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Check out our <a
                                href="https://explorer.orcfax.io"
                                class="text-accent underline text-sm/6">explorer</a
                            >
                            to see the current active data feeds.
                        </p>
                    </div>
                    <div
                        class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm"
                    >
                        <div
                            class="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl"
                        >
                            <img
                                class="size-full object-cover object-top"
                                src="./Explorer.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div
                    class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"
                ></div>
            </div>
            <div class="relative max-lg:row-start-1">
                <div class="absolute inset-px rounded-lg bg-card max-lg:rounded-t-[2rem]"></div>
                <div
                    class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]"
                >
                    <div
                        class="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background"
                    >
                        <Ripple mainCircleSize={100} mainCircleOpacity={0.24} numCircles={8} />
                    </div>
                    <div class="px-8 sm:px-10 -mt-6 pb-8">
                        <p
                            class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"
                        >
                            Automatic Heartbeat
                        </p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Choose your feed's <strong>frequency</strong> (e.g 1hr) and
                            <strong>deviation</strong> (e.g 1% change) for automated on-chain publication.
                            Perfect for systems that need oracle data on a regular basis.
                        </p>
                    </div>
                </div>
                <div
                    class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"
                ></div>
            </div>
            <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div class="absolute inset-px rounded-lg bg-card"></div>
                <div
                    class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]"
                >
                    <div
                        class="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background p-2 pt-8"
                    >
                        <div class="flex items-center justify-center w-full h-full">
                            <Sonar />
                        </div>
                    </div>
                    <div class="px-8 pt-3 sm:px-10">
                        <p
                            class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"
                        >
                            On-Demand API <span
                                class="rounded-full bg-accent/10 px-2 ml-1 py-[0.15rem] text-xs font-semibold text-accent ring-1 ring-inset ring-accent/60"
                            >
                                Beta
                            </span>
                        </p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Query current price data and trigger on-chain publications on your
                            schedule. Perfect for systems that need more manual control.
                        </p>
                    </div>
                </div>
                <div
                    class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"
                ></div>
            </div>
            <div class="relative lg:row-span-2">
                <div
                    class="absolute inset-px rounded-lg bg-card max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
                ></div>
                <div
                    class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]"
                >
                    <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                        <p
                            class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"
                        >
                            Easy Integration With Your Smart Contracts
                        </p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem
                            sodales gravida.
                        </p>
                    </div>
                    <div class="relative min-h-[30rem] w-full">
                        <div
                            class="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-secondary shadow-2xl"
                        >
                            <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                                <div class="-mb-px flex text-sm/6 font-medium text-gray-400">
                                    <div
                                        class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white"
                                    >
                                        IntegrationExample.py
                                    </div>
                                </div>
                            </div>
                            <div class="px-6 pb-14 pt-6 text-primary">
                                <code class="text-sm"> Code example here </code>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center gap-4 mt-2 bg-card">
                        <Link href="https://docs.orcfax.io" isNewTab>Read Docs</Link>
                        <Link href="https://discord.gg/orcfax" isNewTab>Get Help</Link>
                    </div>
                </div>
                <div
                    class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
                ></div>
            </div>
        </div>
    </div>
</div>
