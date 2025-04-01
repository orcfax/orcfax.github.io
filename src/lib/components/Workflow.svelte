<script>
    import WorkflowCard from "./WorkflowCard.svelte";
    import { Eye, PackageSearch, Settings, Blocks, Archive } from "@lucide/svelte";

    //  className="size-6 text-primary"
    let data = [
        {
            id: 1,
            title: "1. Collect",
            content:
                "Orcfax enforces a strict triangulation policy to ensure the authenticity and accuracy of its oracle data. Each validator node queries a minimum of three independent sources, mitigating single points of failure and protecting against compromised or anomalous data.",
            image: "https://i.pinimg.com/736x/ca/aa/49/caaa49d386d84f2d037d0abcc919778f.jpg",
            icon: PackageSearch,
        },
        {
            id: 2,
            title: "2. Normalize",
            content:
                "Data is normalized to ensure consistency and accuracy across all sources. This process involves converting data into a common format, removing duplicates, and standardizing the data structure.",
            image: "https://i.pinimg.com/736x/a5/dc/0a/a5dc0af50d185b7f9111949b17e17e1a.jpg",
            icon: Settings,
        },
        {
            id: 3,
            title: "3. Validate",
            content:
                "Each validator node performs a thorough validation process to ensure the integrity of the data. This includes checking for consistency, accuracy, and adherence to the specified data schema.",
            image: "https://i.pinimg.com/736x/b1/b9/c2/b1b9c230143fb0d8540eabe5b74adf27.jpg",
            icon: Eye,
        },
        {
            id: 4,
            title: "4. Publish",
            content:
                "The validated data is published to the Cardano blockchain, making it available to all users. This ensures transparency and immutability of the data.",
            image: "https://i.pinimg.com/736x/b1/b9/c2/b1b9c230143fb0d8540eabe5b74adf27.jpg",
            icon: Blocks,
        },
        {
            id: 5,
            title: "5. Archive",
            content:
                "All off-chain data is archived on Arweave, ensuring that the data is always available for future reference and cannot be tampered with.",
            image: "https://i.pinimg.com/736x/b1/b9/c2/b1b9c230143fb0d8540eabe5b74adf27.jpg",
            icon: Archive,
        },
    ];
</script>

<section class="bg-secondary py-10 px-8">
    <div class="container">
        <h2 class="text-center text-4xl font-bold text-primary">The Orcfax Workflow</h2>
        <WorkflowCard {data} />
    </div>
</section>
