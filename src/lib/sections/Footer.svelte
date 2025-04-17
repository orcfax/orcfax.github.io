<script lang="ts">
    import { base } from "$app/paths";
    import OpenLink from "$lib/components/icons/OpenLink.svelte";
    import {
        Rss,
        BookOpen,
        Activity,
        MessageSquare,
        Youtube,
        Twitter,
        NotebookPen,
        Github,
        ExternalLink,
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

<footer class="bg-primary text-gray-950">
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {#each footerSections as section}
                <div>
                    <h3 class="text-sm font-semibold text-accent">{section.title}</h3>
                    <ul class="mt-4 space-y-2">
                        {#each section.links as link}
                            <li>
                                <a
                                    href={link.href}
                                    class="flex items-center gap-2 hover:text-accent"
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

        <div class="mt-12 border-t border-gray-200 pt-8">
            <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div class="flex items-center gap-2">
                    <img class="h-8 w-8" src={`${base}/logo.svg`} alt="Orcfax Logo" />
                    <p class="text-sm">© {year} Orcfax Ltd. All rights reserved.</p>
                </div>
                <div class="flex gap-4 text-sm">
                    <a href="/privacy" class="hover:text-accent">Privacy Policy</a>
                    <a href="/terms" class="hover:text-accent">Terms of Service</a>
                </div>
            </div>
        </div>
    </div>
</footer>
