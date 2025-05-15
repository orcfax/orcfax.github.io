<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import {
        Chart,
        DoughnutController,
        ArcElement,
        Legend,
        Title,
        Tooltip,
        type ChartOptions,
        type ChartData,
    } from "chart.js";

    // Register Chart.js components before using them
    Chart.register(DoughnutController, ArcElement, Legend, Title, Tooltip);

    let element: HTMLCanvasElement | null = $state(null);
    let chart: Chart | null = $state(null);
    let innerWidth = $state(0);

    let size = $derived.by(() => {
        if (innerWidth <= 768) return "sm";
        return "lg";
    });

    // Token distribution data
    let data: ChartData<"doughnut"> = {
        labels: [
            "Validator Rewards",
            "Team",
            "Launchpad",
            "ISPO",
            "Ecosystem",
            "Foundation",
            "Yield Farm APY",
            "Promo Airdrop",
            "Advisors",
        ],
        datasets: [
            {
                data: [50, 15, 11, 10, 5, 5, 2, 1, 1], // Percentages based on the chart
                backgroundColor: [
                    "#3d615e",
                    "#4a726f",
                    "#578380",
                    "#649491",
                    "#71a5a2",
                    "#7eb6b3",
                    "#8bc7c4",
                    "#98d8d5",
                    "#A3C7C4",
                ],
                borderWidth: 4,
                hoverOffset: 15,
            },
        ],
    };

    let options: ChartOptions<"doughnut"> = $derived.by(() => ({
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                position: size === "sm" ? "bottom" : "right",
                align: "center",
                onClick: (e, legendItem, legend) => {},
                onHover: (e, legendItem, legend) => {
                    const index = legendItem.index;
                    const chart = legend.chart;
                    const dataset = chart.data.datasets[0];

                    // Store original colors if not already stored
                    if (!(chart as any).originalColors) {
                        (chart as any).originalColors = [...(dataset.backgroundColor as string[])];
                    }

                    // Set all colors to faded except the hovered one
                    dataset.backgroundColor = (chart as any).originalColors.map(
                        (color: string, i: number) => (i === index ? color : color + "4D")
                    );
                    chart.update();
                },
                onLeave: (e, legendItem, legend) => {
                    const chart = legend.chart;
                    const dataset = chart.data.datasets[0];

                    // Restore original colors
                    if ((chart as any).originalColors) {
                        dataset.backgroundColor = (chart as any).originalColors;
                        chart.update();
                    }
                },
                labels: {
                    font: {
                        size: 14,
                    },
                    color: "#EFF5F5",
                    padding: 10,
                    boxWidth: 12,
                    boxHeight: 12,
                    generateLabels: (chart) => {
                        const data = chart.data;
                        if (data.labels && data.datasets.length) {
                            return data.labels.map((label, i) => {
                                const dataset = data.datasets[0];
                                const value = dataset.data[i];
                                const bgColors = dataset.backgroundColor as string[];
                                return {
                                    text: `${label}: ${value}%`,
                                    fillStyle: bgColors[i],
                                    hidden: false,
                                    index: i,
                                    fontColor: "#1F2421",
                                    color: "#1F2421",
                                    textColor: "#1F2421",
                                };
                            });
                        }
                        return [];
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || "";
                        const value = context.raw || 0;
                        return `${label}: ${value}%`;
                    },
                },
            },
        },
        cutout: "60%",
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        onHover: (event, elements, chart) => {
            if (elements.length > 0) {
                const index = elements[0].index;
                const dataset = chart.data.datasets[0];

                // Store original colors if not already stored
                if (!(chart as any).originalColors) {
                    (chart as any).originalColors = [...(dataset.backgroundColor as string[])];
                }

                // Set all colors to faded except the hovered one
                dataset.backgroundColor = (chart as any).originalColors.map(
                    (color: string, i: number) => (i === index ? color : color + "4D")
                );
                chart.update();
            }
        },
    }));

    onMount(() => {
        if (element === null) {
            console.error("Chart element is not set");
            return;
        }

        chart = new Chart(element, {
            type: "doughnut",
            data,
            options,
        });
    });

    onDestroy(() => {
        if (chart) {
            chart.destroy();
            chart = null;
        }
    });
</script>

<svelte:window bind:innerWidth />

<canvas class="w-full h-full" bind:this={element}></canvas>
