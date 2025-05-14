<script lang="ts">
    import { Github, Globe } from "@lucide/svelte";

    interface TeamMember {
        name: string;
        role: string;
        links: {
            type: "x" | "linkedin" | "github" | "website";
            url: string;
        }[];
    }

    const teamMembers: TeamMember[] = [
        {
            name: "Peter Van Garderen",
            role: "Founder / CEO",
            links: [
                { type: "x", url: "https://x.com/pjvangarderen" },
                { type: "linkedin", url: "https://ca.linkedin.com/in/petervangarderen" },
                { type: "website", url: "https://vangarderen.net/" },
            ],
        },
        {
            name: "Ross",
            role: "Technical Lead",
            links: [
                { type: "github", url: "https://github.com/ross-spencer/" },
                { type: "linkedin", url: "https://www.linkedin.com/in/ross-spencer-b6b9b758/--" },
            ],
        },
        {
            name: "Christian",
            role: "Product Owner, Systems Analyst",
            links: [
                { type: "linkedin", url: "https://www.linkedin.com/in/christian-mk/" },
                { type: "x", url: "https://x.com/ChristianMKoch" },
            ],
        },
        {
            name: "Karsten",
            role: "Community Manager",
            links: [{ type: "x", url: "https://x.com/Karstenxyz" }],
        },
        {
            name: "Gabriel",
            role: "Web Dev, Design",
            links: [
                { type: "x", url: "https://x.com/gabriel_export" },
                { type: "github", url: "https://github.com/gchartier" },
                { type: "linkedin", url: "https://www.linkedin.com/in/gabriel-chartier/" },
            ],
        },
        {
            name: "Waalge",
            role: "Cardano Dev",
            links: [
                { type: "github", url: "https://github.com/waalge" },
                { type: "x", url: "https://x.com/waalge" },
                {
                    type: "linkedin",
                    url: "https://www.linkedin.com/in/dominic-algernon-wallis-123b42187/",
                },
            ],
        },
        {
            name: "George",
            role: "Cardano Dev",
            links: [
                { type: "x", url: "https://x.com/cardanoapexpool" },
                { type: "github", url: "https://github.com/george-orcfax" },
            ],
        },
    ];
</script>

<div class="bg-primary w-full px-6 lg:max-w-7xl lg:px-8 flex flex-col items-center">
    <div class="mx-auto flex flex-col items-center max-w-7xl gap-10 xl:grid-cols-3">
        <div class="max-w-xl">
            <h2
                class="text-pretty text-3xl font-semibold tracking-tight text-secondary sm:text-4xl font-mulish text-center"
            >
                Team
            </h2>
            <p class="mt-6 text-lg/8 text-secondary font-mulish text-center">
                We are a lean and dedicated team with deep expertise in archival science, digital
                preservation, and blockchain tech.
            </p>
        </div>
        <ul
            role="list"
            class="grid gap-y-12 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 sm:gap-y-16 xl:col-span-2"
        >
            {#each teamMembers as member}
                {@render teamMemberCard(member)}
            {/each}
        </ul>
    </div>
</div>

{#snippet teamMemberCard(member: TeamMember)}
    <li>
        <div class="flex flex-col items-center gap-x-6">
            <h3 class="text-base/7 font-semibold tracking-tight text-secondary font-mulish">
                {member.name}
            </h3>
            <p class="text-sm/6 font-semibold text-accent">{member.role}</p>
            <ul role="list" class="mt-2 flex gap-x-3">
                {#each member.links as link}
                    {@render socialLink(link)}
                {/each}
            </ul>
        </div>
    </li>
{/snippet}

{#snippet socialLink(link: { type: string; url: string })}
    <li>
        <a href={link.url} target="_blank" class="text-secondary hover:text-accent">
            <span class="sr-only">{link.type}</span>
            {#if link.type === "x"}
                <svg class="size-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                        d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"
                    />
                </svg>
            {:else if link.type === "linkedin"}
                <svg class="size-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                        fill-rule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clip-rule="evenodd"
                    />
                </svg>
            {:else if link.type === "github"}
                <Github class="size-5" />
            {:else if link.type === "website"}
                <Globe class="size-5" />
            {/if}
        </a>
    </li>
{/snippet}
