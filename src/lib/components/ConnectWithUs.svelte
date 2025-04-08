<script lang="ts">
    import { Rss, MessagesSquare, ScrollText, PackageSearch, SquarePlay } from "@lucide/svelte";
</script>

<div class="bg-primary pt-8 pb-20">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-base/7 font-semibold text-accent">Connect</h2>
        <p
            class="mt-2 max-w-xl text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl"
        >
            Join Us - Stay Up To Date
        </p>
        <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div class="relative lg:col-span-3">
                <div
                    class="absolute inset-px rounded-lg bg-card max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"
                ></div>
                <div
                    class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]"
                >
                    <Rss class="h-80 w-full object-cover stroke-secondary/90 pt-8" />
                    <div class="p-10 pt-4">
                        <h3 class="text-sm/4 font-semibold text-accent">Network Status</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">
                            Subscribe to our RSS Feed
                        </p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida
                            justo et nulla efficitur, maximus egestas sem pellentesque.
                        </p>
                    </div>
                </div>
                <div
                    class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"
                ></div>
            </div>
            <div class="relative lg:col-span-3">
                <div class="absolute inset-px rounded-lg bg-card lg:rounded-tr-[2rem]"></div>
                <div
                    class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]"
                >
                    <MessagesSquare class="h-80 w-full object-cover stroke-secondary/90 pt-8" />
                    <div class="p-10 pt-4">
                        <h3 class="text-sm/4 font-semibold text-accent">Community</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">
                            Join Our Discord Server
                        </p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600">
                            Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa,
                            laoreet dapibus ex elit vitae odio.
                        </p>
                    </div>
                </div>
                <div
                    class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]"
                ></div>
            </div>
            <div class="relative lg:col-span-2">
                <div class="absolute inset-px rounded-lg bg-card lg:rounded-bl-[2rem]"></div>
                <div
                    class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]"
                >
                    <ScrollText class="h-80 w-full object-cover stroke-secondary/90 pt-8" />
                    <div class="p-10 pt-4">
                        <h3 class="text-sm/4 font-semibold text-accent">Integrate</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">
                            Read Our Docs
                        </p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600">
                            Sed congue eros non finibus molestie. Vestibulum euismod augue.
                        </p>
                    </div>
                </div>
                <div
                    class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]"
                ></div>
            </div>
            <div class="relative lg:col-span-2">
                <div class="absolute inset-px rounded-lg bg-card"></div>
                <div
                    class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]"
                >
                    <SquarePlay class="h-80 w-full object-cover stroke-secondary/90 pt-8" />
                    <div class="p-10 pt-4">
                        <h3 class="text-sm/4 font-semibold text-accent">Learn More</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">
                            Check Out Our Media Library
                        </p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600">
                            Maecenas at augue sed elit dictum vulputate, in nisi aliquam maximus
                            arcu.
                        </p>
                    </div>
                </div>
                <div
                    class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"
                ></div>
            </div>
            <div class="relative lg:col-span-2">
                <div
                    class="absolute inset-px rounded-lg bg-card max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"
                ></div>
                <div
                    class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]"
                >
                    <PackageSearch class="h-80 w-full object-cover stroke-secondary/90 pt-8" />
                    <div class="p-10 pt-4">
                        <h3 class="text-sm/4 font-semibold text-accent">Discover More</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">
                            Find us on Block Explorers
                        </p>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600">
                            Aenean vulputate justo commodo auctor vehicula in malesuada semper.
                        </p>
                    </div>
                </div>
                <div
                    class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"
                ></div>
            </div>
        </div>
    </div>
</div>
