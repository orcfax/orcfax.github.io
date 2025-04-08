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

    // Token distribution data
    let data: ChartData<"doughnut"> = {
        labels: ["Community & Ecosystem", "Team", "Treasury", "Advisors", "Private Sale"],
        datasets: [
            {
                data: [40, 20, 20, 10, 10], // Percentages based on the chart
                backgroundColor: ["#66A29E", "#66A29E", "#66A29E", "#66A29E", "#66A29E"],
                borderWidth: 4,
                hoverOffset: 15,
            },
        ],
    };

    let options: ChartOptions<"doughnut"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "right",
                labels: {
                    font: {
                        size: 14,
                    },
                    color: "#EFF5F5",
                    padding: 20,
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
                right: 20,
                bottom: 0,
                left: 20,
            },
        },
    };

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

<canvas bind:this={element}></canvas>
