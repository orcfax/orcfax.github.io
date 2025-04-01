<script>
    import { Coins, Search, Users } from "@lucide/svelte";
</script>

<div class="bg-primary pb-24 sm:pb-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-secondary sm:text-4xl font-mulish">
                Find Us Online
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600 font-mulish">
                Connect with Orcfax across various platforms and track our token performance.
            </p>
        </div>
        <div
            class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
            <div
                class="flex gap-x-4 rounded-xl bg-card p-6 ring-1 ring-inset ring-accent/20 shadow-sm"
            >
                <Coins class="size-7 flex-none text-accent" />
                <div>
                    <h3 class="font-semibold text-secondary font-mulish">Token Listings</h3>
                    <p class="mt-2 text-gray-600">
                        Track ORCFAX token performance and market data on popular platforms.
                    </p>
                    <a
                        href="https://www.coingecko.com"
                        class="mt-4 text-sm font-semibold text-accent hover:text-accentDark group inline-flex items-center"
                    >
                        View on CoinGecko
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
            <div
                class="flex gap-x-4 rounded-xl bg-card p-6 ring-1 ring-inset ring-accent/20 shadow-sm"
            >
                <Search class="size-7 flex-none text-accent" />
                <div>
                    <h3 class="font-semibold text-secondary font-mulish">Blockchain Explorers</h3>
                    <p class="mt-2 text-gray-600">
                        Explore our on-chain activity and smart contracts on Cardano.
                    </p>
                    <a
                        href="https://cardanoscan.io"
                        class="mt-4 text-sm font-semibold text-accent hover:text-accentDark group inline-flex items-center"
                    >
                        View on CardanoScan
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
            <div
                class="flex gap-x-4 rounded-xl bg-card p-6 ring-1 ring-inset ring-accent/20 shadow-sm"
            >
                <Users class="size-7 flex-none text-accent" />
                <div>
                    <h3 class="font-semibold text-secondary font-mulish">Social Media</h3>
                    <p class="mt-2 text-gray-600">
                        Follow us on social media for updates, announcements and community
                        discussions.
                    </p>
                    <div class="mt-4 flex flex-col gap-2">
                        <a
                            href="https://twitter.com/orcfax"
                            class="text-sm font-semibold text-accent hover:text-accentDark group inline-flex items-center"
                        >
                            Twitter
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                        <a
                            href="https://discord.gg/orcfax"
                            class="text-sm font-semibold text-accent hover:text-accentDark group inline-flex items-center"
                        >
                            Discord
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
