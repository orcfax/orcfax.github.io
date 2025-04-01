<script>
    import { Book, Rss, Activity } from "@lucide/svelte";
</script>

<div class="bg-primary py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-secondary sm:text-4xl font-mulish">
                Stay Up to Date
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600 font-mulish">
                Keep track of Orcfax's latest developments and system status through our various
                channels.
            </p>
        </div>
        <div
            class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
            <div
                class="flex gap-x-4 rounded-xl bg-card p-6 ring-1 ring-inset ring-accent/20 shadow-sm"
            >
                <Book class="size-7 flex-none text-accent" />
                <div>
                    <h3 class="font-semibold text-secondary font-mulish">Documentation</h3>
                    <p class="mt-2 text-gray-600">
                        Comprehensive guides and API references for integrating with Orcfax.
                    </p>
                    <a
                        href="https://docs.orcfax.io"
                        class="mt-4 text-sm font-semibold text-accent hover:text-accentDark group inline-flex items-center"
                    >
                        View documentation
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
                <Rss class="size-7 flex-none text-accent" />
                <div>
                    <h3 class="font-semibold text-secondary font-mulish">RSS Feed</h3>
                    <p class="mt-2 text-gray-600">
                        Subscribe to our RSS feed for the latest updates and announcements.
                    </p>
                    <a
                        href="https://status.orcfax.io/#rss-subscription"
                        class="mt-4 text-sm font-semibold text-accent hover:text-accentDark group inline-flex items-center"
                    >
                        Subscribe to feed
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
                <Activity class="size-7 flex-none text-accent" />
                <div>
                    <h3 class="font-semibold text-secondary font-mulish">System Status</h3>
                    <p class="mt-2 text-gray-600">
                        Check our system status page for real-time updates on service health.
                    </p>
                    <a
                        href="https://status.orcfax.io"
                        class="mt-4 text-sm font-semibold text-accent hover:text-accentDark group inline-flex items-center"
                    >
                        View status page
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
