<script lang="ts">
    import { base } from "$app/paths";
    import Link from "$lib/components/Link.svelte";
    import SocialCard from "$lib/components/SocialCard.svelte";
    import PageSection from "$lib/components/PageSection.svelte";

    const socialCards = [
        {
            title: "Discord",
            image: `${base}/images/social/discord.svg`,
            altText: "The discord logo in Orcfax green",
            description: "Join our community",
            url: "https://discord.com/invite/UbAeRuNzDu",
        },
        {
            title: "X (Twitter)",
            image: `${base}/images/social/x.svg`,
            altText: "The X (formerly Twitter) logo in Orcfax green",
            description: "Keep up with updates",
            url: "https://x.com/orcfax",
        },
        {
            title: "Medium",
            image: `${base}/images/social/medium.svg`,
            altText: "The Medium logo in Orcfax green",
            description: "Dive deeper into Orcfax",
            url: "https://medium.com/@orcfax",
        },
    ];
</script>

<PageSection id="connect" class="bg-primary" contentClass="items-center">
    <h2 class="text-3xl pb-6">Connect With Us!</h2>
    <div class="flex flex-col items-center gap-14">
        <ul class="flex flex-col lg:flex-row gap-14">
            {#each socialCards as socialCard}
                <SocialCard {socialCard} />
            {/each}
        </ul>
        <p class="font-bold text-xl">
            Email us at <Link class="underline text-xl" href="mailto:info@orcfax.io" isNewTab
                >info@orcfax.io</Link
            >
        </p>
    </div>
    <div class="flex flex-col items-center gap-4 py-16">
        <h3 class="text-3xl text-center">Business and Collaborations</h3>
        <p class="max-w-4xl text-xl font-semibold text-center">
            If your project is interested in learning more about our services or integrating with
            us, please contact us via <Link
                class="underline text-xl"
                href="mailto:info@orcfax.io"
                isNewTab>email</Link
            > or <Link
                class="underline text-xl"
                href="https://discord.com/invite/UbAeRuNzDu"
                isNewTab>Discord</Link
            >.
        </p>
    </div>
</PageSection>
