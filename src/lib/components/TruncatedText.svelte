<script lang="ts">
    export let text: string;
    export let maxLength = 16; // Default value, can be overridden

    $: if (text) {
        const half = Math.floor(maxLength / 2);
        const start = text.slice(0, half);
        const end = text.slice(-half);
        truncatedText = text.length > maxLength ? `${start}...${end}` : text;
    }

    let truncatedText = "";
</script>

<span title={text} class="font-medium">
    {truncatedText}
</span>
