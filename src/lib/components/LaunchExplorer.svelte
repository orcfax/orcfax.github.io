<script lang="ts">
    import { cn } from "$lib/utils";
    import RippleButton from "./RippleButton.svelte";
</script>

<RippleButton rippleColor="#66A29E" duration="1500ms">
    <div
        class="group inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300"
    >
        <span>Launch Explorer</span>

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
