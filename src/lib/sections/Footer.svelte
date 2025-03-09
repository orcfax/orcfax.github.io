<script lang="ts">
    import { base } from "$app/paths";
    import OpenLink from "$lib/components/icons/OpenLink.svelte";

    $: year = new Date().getFullYear();
</script>

<footer
    style="background-color: #1F2421; color: #EFF5F5;"
    class="flex flex-col md:flex-row justify-between items-center w-full p-2 gap-4 xs:gap-0"
>
    <div class="flex items-center gap-2">
        <a href="https://orcfax.io">
            <img class="w-14" src={`${base}/logo.svg`} alt="Orcfax Logo" />
        </a>
        <p class="mt-1 text-sm font-medium">Copyright © Orcfax Ltd. {year}</p>
    </div>

    <div class="flex flex-col xs:flex-row gap-4">
        <div class="flex justify-center xs:justify-start gap-4">
            <a
                class="flex items-center gap-1 hover:underline"
                href="https://docs.orcfax.io"
                target="_blank"
            >
                <p class="text-lg font-semibold">Docs</p>
                <OpenLink />
            </a>
            <a
                class="flex items-center gap-1 hover:underline"
                href="https://explorer.orcfax.io"
                target="_blank"
            >
                <p class="text-lg font-semibold">Explorer</p>
                <OpenLink />
            </a>
        </div>

        <div class="grid grid-cols-4 gap-2">
            <a
                class="flex items-center justify-center"
                href="https://discord.com/invite/UbAeRuNzDu"
                target="_blank"
            >
                <img
                    src={`${base}/images/social/discord.svg`}
                    class="w-8 h-8"
                    alt="The discord logo in Orcfax green."
                />
            </a>
            <a
                class="flex items-center justify-center w-full"
                href="https://x.com/orcfax"
                target="_blank"
            >
                <img
                    src={`${base}/images/social/x.svg`}
                    class="w-max h-[1.7rem]"
                    alt="The x (formerly Twitter) logo in Orcfax green."
                />
            </a>
            <a
                class="flex items-center justify-center"
                href="https://medium.com/@orcfax"
                target="_blank"
            >
                <img
                    src={`${base}/images/social/medium.svg`}
                    class="w-9 h-9"
                    alt="The medium logo in Orcfax green."
                />
            </a>
            <a
                class="flex items-center justify-center"
                href="https://github.com/orcfax"
                target="_blank"
            >
                <img
                    src={`${base}/images/social/github.svg`}
                    class="w-6 h-6"
                    alt="The github logo in Orcfax green."
                />
            </a>
        </div>
    </div>
</footer>
