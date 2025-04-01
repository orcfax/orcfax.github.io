<script lang="ts">
    import Timeline from "./Timeline.svelte";
    import Collect from "./Collect.svelte";
    import Normalize from "./Normalize.svelte";
    import Validate from "./Validate.svelte";
    import Publish from "./Publish.svelte";
    import Archive from "./Archive.svelte";

    type TimelineItem = {
        title: string;
        content: any;
    };

    let timelineData: TimelineItem[] = [
        {
            title: "1. Collect",
            content: Collect,
        },
        {
            title: "2. Normalize",
            content: Normalize,
        },
        {
            title: "3. Validate",
            content: Validate,
        },
        {
            title: "4. Publish",
            content: Publish,
        },
        {
            title: "5. Archive",
            content: Archive,
        },
    ];
</script>

<Timeline {timelineData} />
