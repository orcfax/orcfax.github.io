<script lang="ts">
    import {
        MessageCircleWarning,
        Nfc,
        SpellCheck,
        Trophy,
        Shield,
        Truck,
        Coins,
        Wallet,
        Scale,
        ChevronLeft,
        ChevronRight,
    } from "@lucide/svelte";
    import { onMount } from "svelte";

    interface UseCase {
        title: string;
        description: string;
        icon: any; // Lucide icon component
    }

    let useCases: UseCase[] = [
        {
            title: "Verifiable DeFi Data",
            description:
                "Power decentralized finance applications with price feeds and other market data. Ensure reliable execution of smart contracts with permanently auditable data for lending, trading, and yield generation.",
            icon: Wallet,
        },
        {
            title: "Dispute Resolution",
            description:
                "When the smart-contract isn't enough, Orcfax creates trust through the archival bond. Storing data from its processes on an L0 archive to enable long-term dispute resolution.",
            icon: MessageCircleWarning,
        },
        {
            title: "Proof of Reserve",
            description:
                "Verify the backing of stablecoins and other tokenized assets with real-time reserve data. Provide transparent proof of collateral and ensure the integrity of backed digital assets.",
            icon: Scale,
        },
        {
            title: "Supply Chain Management",
            description:
                "Track goods and verify their authenticity throughout the supply chain. Monitor shipping conditions, delivery status, and product origins with tamper-proof data from IoT devices and logistics systems.",
            icon: Truck,
        },
        {
            title: "Real World Assets",
            description:
                "Bridge physical assets with blockchain through verified data feeds. Enable tokenization of real estate, commodities, and other tangible assets with reliable price feeds and ownership verification.",
            icon: Coins,
        },
        {
            title: "Real-World Event Triggers",
            description:
                "Trigger smart-contracts based on real-world events, such as the completion of a task, the arrival of a shipment, or the fulfillment of an order.",
            icon: Nfc,
        },
        {
            title: "Data Validation",
            description:
                "Validate data from off-chain sources, such as weather forecasts, news articles, or social media, before it is added to the blockchain.",
            icon: SpellCheck,
        },
        {
            title: "Redundancy & Risk Distribution",
            description:
                "Distribute data validation across multiple oracle services to ensure reliability and reduce single points of failure. Create a robust network of data providers for critical blockchain applications.",
            icon: Shield,
        },
        {
            title: "Sports Betting Apps",
            description:
                "Enable decentralized sports betting platforms with real-time match results, scores, and statistics. Ensure fair and transparent betting outcomes with verifiable data from multiple sources.",
            icon: Trophy,
        },
    ];

    let currentIndex = 0;
    let carousel: HTMLElement;
    let itemsPerView = 1;

    function updateItemsPerView() {
        itemsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    }

    function updateCurrentIndex() {
        if (!carousel) return;

        const scrollLeft = carousel.scrollLeft;
        const itemWidth = carousel.querySelector(".carousel-item")?.clientWidth || 0;
        const newIndex = Math.round(scrollLeft / itemWidth);
        currentIndex = Math.max(0, Math.min(newIndex, useCases.length - itemsPerView));
    }

    function moveCarousel(direction: "left" | "right") {
        const maxIndex = useCases.length - itemsPerView;

        if (direction === "left") {
            currentIndex = Math.max(0, currentIndex - 1);
        } else {
            currentIndex = Math.min(maxIndex, currentIndex + 1);
        }

        const item = carousel.querySelector(`#item${currentIndex}`);
        if (item) {
            item.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
    }

    function handleClick(e: MouseEvent, direction: "left" | "right") {
        e.preventDefault();
        moveCarousel(direction);
    }

    onMount(() => {
        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);
        carousel.addEventListener("scroll", updateCurrentIndex);

        return () => {
            window.removeEventListener("resize", updateItemsPerView);
            carousel.removeEventListener("scroll", updateCurrentIndex);
        };
    });
</script>

<div class="bg-primary">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div class="mx-auto max-w-3xl lg:text-center">
            <h1 class="mt-2 text-6xl font-bold font-mulish text-secondary">Use Cases</h1>
            <p class="mt-6 text-lg/8 text-secondary font-mulish">
                When Trust and Proof are Non-Negotiable.
            </p>
        </div>

        <div class="mx-auto mt-8 max-w-2xl lg:max-w-none relative">
            <div class="carousel w-full overflow-x-auto" bind:this={carousel}>
                {#each useCases as useCase, i}
                    <div
                        id={`item${i}`}
                        class="carousel-item w-full md:w-1/2 lg:w-1/3 justify-center"
                    >
                        <div
                            class="card relative bg-card rounded-lg p-6 shadow-sm border border-slate-400 group hover:shadow-lg hover:bg-secondary max-w-md mx-4"
                        >
                            <dt
                                class="text-base font-bold text-secondary group-hover:text-primary flex items-center justify-center gap-2"
                            >
                                <svelte:component
                                    this={useCase.icon}
                                    class="icon-transition flex items-center justify-center size-6 text-accentDark group-hover:text-accent"
                                />
                                <span class="text-transition">{useCase.title}</span>
                            </dt>
                            <dd
                                class="text-transition mt-2 text-base/6 text-secondary group-hover:text-primary text-center"
                            >
                                {useCase.description}
                            </dd>
                        </div>
                    </div>
                {/each}
            </div>
            {#if currentIndex > 0}
                <div class="absolute -left-14 top-1/2 -translate-y-1/2">
                    <button
                        on:click={(e) => handleClick(e, "left")}
                        class="btn rounded-lg bg-secondary h-36"
                    >
                        <svelte:component this={ChevronLeft} class="size-6 text-primary" />
                    </button>
                </div>
            {/if}
            {#if currentIndex < useCases.length - itemsPerView}
                <div class="absolute -right-14 top-1/2 -translate-y-1/2 h-36">
                    <button
                        on:click={(e) => handleClick(e, "right")}
                        class="btn rounded-lg bg-secondary h-36"
                    >
                        <svelte:component this={ChevronRight} class="size-6 text-primary" />
                    </button>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .card {
        transition: all 0.1s ease-in-out;
    }

    .card:hover {
        transform: translateY(-2px);
    }

    .text-transition {
        transition: color 0.1s ease-in-out;
    }
</style>
