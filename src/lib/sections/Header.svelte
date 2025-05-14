<script lang="ts">
    import { Telescope, Activity, BookOpenText } from "@lucide/svelte";
    import { base } from "$app/paths";
    let isOpen = $state(false);

    function toggleMenu() {
        isOpen = !isOpen;
    }

    let year = $state(new Date().getFullYear());
</script>

<header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 pl-4 pt-4" aria-label="Global">
        <div class="flex lg:flex-1">
            <a href="/" class="-m-1.5 p-1.5 flex items-center">
                <img
                    class="h-14 w-auto transform transition ease-in-out duration-300 delay-150 hover:-rotate-45"
                    src="/logo.svg"
                    alt=""
                />
                <span class="font-mulish font-black text-4xl ml-1 -mb-4 text-gray-900">Orcfax</span>
            </a>
        </div>
        <div class="flex lg:hidden">
            <button
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onclick={toggleMenu}
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <a href="#about" class="text-sm/6 font-semibold text-gray-900">About</a>
            <a href="#features" class="text-sm/6 font-semibold text-gray-900">Features</a>
            <a href="#workflow" class="text-sm/6 font-semibold text-gray-900">Workflow</a>
            <a href="#solutions" class="text-sm/6 font-semibold text-gray-900">Solutions</a>
            <a href="#tokenomics" class="text-sm/6 font-semibold text-gray-900">Tokenomics</a>
            <a href="#validators" class="text-sm/6 font-semibold text-gray-900">Validators</a>
        </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    {#if isOpen}
        <div class="lg:hidden" role="dialog" aria-modal="true">
            <div class="fixed inset-0 z-50"></div>
            <div
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="flex items-center justify-between">
                    <div class="flex lg:flex-1">
                        <a href="/" class="-m-1.5 p-1.5 flex items-center">
                            <img
                                class="h-14 w-auto transform transition ease-in-out duration-300 delay-150 hover:-rotate-45"
                                src="/logo.svg"
                                alt=""
                            />
                            <span class="font-mulish font-black text-4xl ml-1 -mb-4 text-gray-900"
                                >Orcfax</span
                            >
                        </a>
                    </div>
                    <button
                        type="button"
                        class="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onclick={toggleMenu}
                    >
                        <span class="sr-only">Close menu</span>
                        <svg
                            class="size-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-secondary/20">
                        <div class="space-y-2 py-6">
                            <a
                                href="#about"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >About</a
                            >
                            <a
                                href="#features"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >Features</a
                            >
                            <a
                                href="#workflow"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >Workflow</a
                            >
                            <a
                                href="#solutions"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >Solutions</a
                            >
                            <a
                                href="#tokenomics"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >Tokenomics</a
                            >
                            <a
                                href="#validators"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >Validators</a
                            >
                        </div>
                        <div class="py-6">
                            <a
                                href="https://explorer.orcfax.io"
                                target="_blank"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                ><Telescope class="inline-block h-4 w-4 mr-2" />Explorer</a
                            >
                            <a
                                href="https://status.orcfax.io"
                                target="_blank"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                ><Activity class="inline-block h-4 w-4 mr-2" />Network Status</a
                            >
                            <a
                                href="https://docs.orcfax.io"
                                target="_blank"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                ><BookOpenText class="inline-block h-4 w-4 mr-2" />Docs</a
                            >
                        </div>
                        <div class="pt-4 w-full">
                            <div class="flex flex-col items-center justify-between gap-4">
                                <div class="flex items-center gap-2">
                                    <img
                                        class="h-8 w-8"
                                        src={`${base}/logo.svg`}
                                        alt="Orcfax Logo"
                                    />
                                    <p class="text-sm">
                                        © {year} Orcfax Ltd. All rights reserved.
                                    </p>
                                </div>
                                <div class="flex gap-4 text-sm">
                                    <a
                                        href="https://docs.orcfax.io/terms-of-service"
                                        class="hover:text-accent"
                                        target="_blank"
                                    >
                                        Terms of Service
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</header>
