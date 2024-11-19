<script lang="ts">
    import Button from "$lib/components/Button.svelte";

    export let isNewTab = false;
    export let isButton = false;

    const defaultStyles = "underline";
</script>

{#if isButton}
    <a href={$$props.href} target={isNewTab ? "_blank" : "_self"} class="m-2" on:click>
        <Button>
            <slot />
        </Button>
    </a>
{:else}
    <a
        class={$$props.class ?? defaultStyles}
        href={$$props.href}
        target={isNewTab ? "_blank" : "_self"}
        on:click
    >
        <slot />
    </a>
{/if}
