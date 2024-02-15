<script lang="ts">
    import { base } from "$app/paths";
    import OpenLink from "$lib/components/icons/OpenLink.svelte";
</script>

<footer
    style="background-color: #1F2421; color: #EFF5F5;"
    class="flex flex-col md:flex-row justify-between items-center w-full p-2 gap-4 xs:gap-0"
>
    <div class="flex items-center gap-2">
        <a href="https://orcfax.io">
            <img
                class="w-16 md:w-20 bg-accent rounded-full"
                src={`${base}/echo.svg`}
                alt="Orcfax Logo"
            />
        </a>

        <p class="text-sm font-medium">Copyright © Orcfax Ltd. 2024</p>
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

        <div class="flex gap-4 pr-2">
            <a
                class="flex items-center justify-center"
                href="https://discord.com/invite/UbAeRuNzDu"
                target="_blank"
            >
                <img
                    src={`${base}/images/social/discord.svg`}
                    class="w-12 h-12"
                    alt="The discord logo in Orcfax green."
                />
            </a>
            <a class="flex items-center justify-center" href="https://x.com/orcfax" target="_blank">
                <img
                    src={`${base}/images/social/x.svg`}
                    class="w-10 h-10"
                    alt="The x (formerly Twitter) logo in Orcfax green."
                />
            </a>
            <a
                class="flex items-center justify-center -mr-2 -ml-3"
                href="https://medium.com/@orcfax"
                target="_blank"
            >
                <img
                    src={`${base}/images/social/medium.svg`}
                    class="w-14 h-14"
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
                    class="w-10 h-10"
                    alt="The github logo in Orcfax green."
                />
            </a>
        </div>
    </div>
</footer>
