<script lang="ts">
    import { onMount } from "svelte";

    let latestPost = $state<{ title: string; link: string } | null>(null);
    let error = $state<string | null>(null);

    async function fetchLatestPost() {
        try {
            const response = await fetch(
                "https://fact-index-db.server.orcfax.io/api/collections/rss/records?sort=-created&limit=1"
            );
            const data = await response.json();

            if (data.items && data.items.length > 0) {
                const post = data.items[0];
                latestPost = {
                    title: post.title,
                    link: `/blog/${post.id}`, // Assuming you have a blog post route
                };
            }
        } catch (e) {
            error = "Failed to fetch latest blog post";
            console.error("Error fetching from PocketBase:", e);
        }
    }

    onMount(() => {
        fetchLatestPost();
    });
</script>

{#if error}
    <div class="text-red-500">{error}</div>
{:else if latestPost}
    <a href={latestPost.link} target="_blank" class="inline-flex space-x-3 justify-start">
        <span
            class="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent ring-1 ring-inset ring-accent/60"
        >
            What's New
        </span>
        <span class="inline-flex items-center space-x-2 text-sm font-medium text-secondary/60">
            <span>Read {latestPost.title}</span>
            <svg
                class="size-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
            >
                <path
                    fill-rule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                />
            </svg>
        </span>
    </a>
{/if}
