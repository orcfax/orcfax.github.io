<script lang="ts">
    import type { Snippet } from "svelte";
    import RippleButton from "$lib/components/RippleButton.svelte";

    interface Props {
        href: string;
        children: Snippet;
        isNewTab?: boolean;
        isButton?: boolean;
        class?: string;
        theme?: "dark" | "light";
    }

    let {
        href,
        children: text,
        isNewTab = false,
        isButton = false,
        class: className = "underline",
        theme = "dark",
    }: Props = $props();
</script>

{#if isButton}
    <a {href} target={isNewTab ? "_blank" : "_self"}>
        <RippleButton rippleColor="#66A29E" duration="1500ms" {theme}>
            <div
                class="group inline-flex items-center justify-center px-1 py-1 transition ease-out hover:duration-300"
            >
                {@render text()}

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                </svg>
            </div>
        </RippleButton>
    </a>
{:else}
    <a class={className} {href} target={isNewTab ? "_blank" : "_self"}>
        {@render text()}
    </a>
{/if}
