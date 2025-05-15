<script lang="ts">
    import { base } from "$app/paths";
    import Separator from "$lib/components/Separator.svelte";
    import {
        Rss,
        Activity,
        MessageSquare,
        Youtube,
        Twitter,
        NotebookPen,
        Github,
        BookA,
        BookOpenText,
        Telescope,
    } from "@lucide/svelte";

    $: year = new Date().getFullYear();

    interface FooterLink {
        title: string;
        href: string;
        icon: any;
        external?: boolean;
    }

    interface FooterSection {
        title: string;
        links: FooterLink[];
    }

    const footerSections: FooterSection[] = [
        {
            title: "Resources",
            links: [
                {
                    title: "Documentation",
                    href: "https://docs.orcfax.io",
                    icon: BookOpenText,
                    external: true,
                },
                {
                    title: "Glossary",
                    href: "https://glossary.orcfax.io/",
                    icon: BookA,
                    external: true,
                },
                {
                    title: "Blog",
                    href: "https://medium.com/@orcfax",
                    icon: NotebookPen,
                    external: true,
                },
                {
                    title: "Video Library",
                    href: "https://www.youtube.com/@orcfax",
                    icon: Youtube,
                    external: true,
                },
            ],
        },
        {
            title: "Apps",
            links: [
                {
                    title: "Explorer",
                    href: "https://explorer.orcfax.io",
                    icon: Telescope,
                    external: true,
                },
                {
                    title: "Status",
                    href: "https://status.orcfax.io/",
                    icon: Activity,
                    external: true,
                },
                {
                    title: "RSS",
                    href: "https://status.orcfax.io/#rss-subscription",
                    icon: Rss,
                    external: true,
                },
            ],
        },
        {
            title: "Community",
            links: [
                {
                    title: "Discord",
                    href: "https://discord.com/invite/UbAeRuNzDu",
                    icon: MessageSquare,
                    external: true,
                },
                {
                    title: "X (Twitter)",
                    href: "https://x.com/orcfax",
                    icon: Twitter,
                    external: true,
                },
                {
                    title: "GitHub",
                    href: "https://github.com/orcfax",
                    icon: Github,
                    external: true,
                },
            ],
        },
    ];
</script>

<footer class="bg-primary text-secondary">
    <div
        class="flex justify-center items-center w-full min-h-10 px-20 py-10 pt-20 flex-col gap-10 bg-primary"
    >
        <Separator gradient={true} />
    </div>
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8 w-fit flex flex-col items-center">
        <div class="flex flex-col xs:flex-row gap-x-20 gap-y-10 justify-center w-fit">
            {#each footerSections as section}
                <div class="w-fit">
                    <h3 class="text-sm font-semibold text-accent">{section.title}</h3>
                    <ul class="mt-4 space-y-2">
                        {#each section.links as link}
                            <li>
                                <a
                                    href={link.href}
                                    class="flex items-center w-fit gap-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-200 hover:after:w-full"
                                    target={link.external ? "_blank" : undefined}
                                >
                                    <svelte:component this={link.icon} class="h-4 w-4" />
                                    <span>{link.title}</span>
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>

        <div class="mt-12 pt-8 w-full">
            <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div class="flex items-center gap-2">
                    <img class="h-8 w-8" src={`${base}/logo.svg`} alt="Orcfax Logo" />
                    <p class="text-sm">© {year} Orcfax Ltd. All rights reserved.</p>
                </div>
                <div class="flex gap-4 text-sm">
                    <a
                        href="https://docs.orcfax.io/terms-of-service"
                        class="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-200 hover:after:w-full"
                        target="_blank"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
