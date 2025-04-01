<script lang="ts">
    export let fromColor = "from-accentDark";
    export let toColor = "to-primary";
    export let height = "h-32";
</script>

<div class="relative w-full overflow-hidden">
    <!-- Main gradient divider with curved shape -->
    <div class={`w-full ${height} ${fromColor} ${toColor} relative`}>
        <!-- Bottom curved edge -->
        <svg
            class="absolute bottom-0 left-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            style="transform: translateY(1px);"
        >
            <path
                fill="currentColor"
                class={toColor.replace("to-", "text-")}
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
        </svg>

        <!-- Subtle decorative elements -->
        <!-- <div class="absolute inset-0 overflow-hidden opacity-10">
            <div class="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white/20 blur-xl"></div>
            <div
                class="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-white/20 blur-xl"
            ></div>
            <div
                class="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-white/20 blur-xl"
            ></div>
        </div> -->
    </div>
</div>

<style>
    /* Ensure smooth color transitions */
    div {
        background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
    }
</style>
