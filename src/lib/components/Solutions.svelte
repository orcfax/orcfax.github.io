<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import Ripple from "./Ripple.svelte";
    import Sonar from "./Sonar.svelte";
</script>

<div class="bg-primary">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div class="mx-auto max-w-3xl lg:text-center">
            <h1 class="mt-2 text-5xl lg:text-6xl font-bold font-mulish text-secondary text-center">
                Data Feed Solutions
            </h1>
            <p class="mt-6 text-lg/8 text-secondary font-mulish text-center">
                The data and proof you need for your smart contracts.
            </p>
        </div>

        <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div class="relative lg:row-span-2 order-1">
                <div
                    class="absolute inset-px rounded-lg bg-card lg:rounded-l-[2rem] max-lg:rounded-t-lg"
                ></div>
                <div
                    class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)] max-lg:rounded-t-lg border border-slate-400"
                >
                    <div class="px-8 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                        <p class="mt-2 text-lg font-semibold tracking-tight text-secondary">
                            Orcfax oracle data feeds
                        </p>
                        <p class="mt-2 max-w-lg text-sm/6 text-secondary">
                            To learn more about the available feeds, feed types, and feed support
                            models, refer to our <a
                                href="https://docs.orcfax.io/feed-overview"
                                target="_blank"
                                class="text-accent underline text-sm/6">docs</a
                            >.
                        </p>
                        <p class="mt-2 max-w-lg text-sm/6 text-secondary">
                            You can also view the current active data feeds on our
                            <a
                                href="https://explorer.orcfax.io"
                                target="_blank"
                                class="text-accent underline text-sm/6">explorer</a
                            >.
                        </p>
                    </div>
                    <div
                        class="relative min-h-[28rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm"
                    >
                        <div
                            class="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl"
                        >
                            <img
                                class="size-full object-cover object-top p-2"
                                src="./Explorer.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div
                    class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem] max-lg:rounded-t-lg"
                ></div>
            </div>
            <div class="relative order-2">
                <div class="absolute inset-px rounded-lg bg-card"></div>
                <div
                    class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] border border-slate-400"
                >
                    <div
                        class="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background"
                    >
                        <Ripple mainCircleSize={100} mainCircleOpacity={0.24} numCircles={8} />
                    </div>
                    <div class="px-8 sm:px-10 -mt-6 pb-8">
                        <p class="mt-2 text-lg font-semibold tracking-tight text-secondary">
                            Automatic heartbeat
                        </p>
                        <p class="mt-2 max-w-lg text-sm/6 text-secondary">
                            Choose your feed's <strong>frequency</strong> (e.g 1hr) and
                            <strong>deviation</strong> (e.g 1% change) for automated on-chain publication.
                            Perfect for systems that need oracle data on a regular basis.
                        </p>
                    </div>
                </div>
                <div
                    class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"
                ></div>
            </div>
            <div class="relative lg:col-start-2 lg:row-start-2 order-3">
                <div class="absolute inset-px rounded-lg bg-card"></div>
                <div
                    class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] border border-slate-400"
                >
                    <div
                        class="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background p-2 pt-8"
                    >
                        <div class="flex items-center justify-center w-full h-full">
                            <Sonar />
                        </div>
                    </div>
                    <div class="px-8 pb-8 py-3 sm:px-10">
                        <p class="mt-2 text-lg font-semibold tracking-tight text-secondary">
                            On-demand API <span
                                class="rounded-full bg-accent/10 px-2 ml-1 py-[0.15rem] text-xs font-semibold text-accent ring-1 ring-inset ring-accent/60"
                            >
                                Beta
                            </span>
                        </p>
                        <p class="mt-2 max-w-lg text-sm/6 text-secondary">
                            Query current price data and trigger on-chain publications on your
                            schedule. Perfect for systems that need more manual control.
                        </p>
                    </div>
                </div>
                <div
                    class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"
                ></div>
            </div>
            <div class="relative lg:row-span-2 order-4">
                <div
                    class="absolute inset-px rounded-lg bg-card max-lg:rounded-b-lg lg:rounded-r-[2rem]"
                ></div>
                <div
                    class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-lg lg:rounded-r-[calc(2rem+1px)] border border-slate-400"
                >
                    <div class="flex flex-col gap-2 px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                        <div>
                            <p class="mt-2 text-lg font-semibold tracking-tight text-secondary">
                                Integrate with your smart contracts
                            </p>
                            <p class="mt-2 max-w-lg text-sm/6 text-secondary">
                                Read our <a
                                    href="https://docs.orcfax.io/consume"
                                    target="_blank"
                                    class="text-accent underline text-sm/6">developer manual</a
                                >
                                for integration details and check out our
                                <a
                                    href="https://github.com/orcfax/orcfax-examples"
                                    target="_blank"
                                    class="text-accent underline text-sm/6">examples</a
                                >
                                of demo dApps that utilize Orcfax oracle feeds.
                            </p>
                        </div>
                        <div>
                            <p class="mt-6 text-lg font-semibold tracking-tight text-secondary">
                                Build with Orcfax
                            </p>
                            <p class="mt-2 max-w-lg text-sm/6 text-secondary">
                                We are open to exploring custom oracle solutions for interested and
                                aligned projects such as:
                            </p>
                            <ul class="list-disc list-inside">
                                <li class="text-sm/6 text-secondary">New feed types</li>
                                <li class="text-sm/6 text-secondary">Custom data sources</li>
                                <li class="text-sm/6 text-secondary">Custom data processing</li>
                                <li class="text-sm/6 text-secondary">Collaborative research</li>
                            </ul>
                        </div>
                        <div class="pb-8">
                            <p class="my-4 text-lg font-semibold tracking-tight text-secondary">
                                For help & support
                            </p>
                            <div class="flex flex-col justify-center gap-4 mt-2 bg-card">
                                <Link href="https://discord.gg/orcfax" isNewTab isButton
                                    >Join Our Discord</Link
                                >
                                <Link href="https://x.com/orcfax" isNewTab isButton
                                    >Message Us On X</Link
                                >
                                <Link href="mailto:info@orcfax.io" isNewTab isButton
                                    ><p>
                                        Email Us <span class="text-xs">(info@orcfax.io)</span>
                                    </p></Link
                                >
                            </div>
                        </div>
                    </div>
                    <!-- <div class="relative min-h-[30rem] w-full">
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
                    </div> -->
                </div>
                <div
                    class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-lg lg:rounded-r-[2rem]"
                ></div>
            </div>
        </div>
    </div>
</div>
