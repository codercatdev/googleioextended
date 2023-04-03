<script lang="ts">
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
	import ScheduleCard from '$lib/components/ScheduleCard.svelte';

	export let title = 'Event';
	export let desc = 'Svelte Talk';
	export let fromTime = Date.now();
	export let toTime = Date.now() + 3600000;
</script>

<LayoutWrapper>
	<a class="bcu-button" href="/schedule">{`<-`} Back to Schedule</a>
	<ScheduleCard {title} {desc} {fromTime} {toTime} />
</LayoutWrapper>
