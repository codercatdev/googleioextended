<script lang="ts">
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
	import ScheduleCard from '$lib/components/ScheduleCard.svelte';
</script>

<LayoutWrapper>
	<div class="flex gap-2 md:gap-8">
		<h1>Schedule for Google I/O Extended - Grand Rapids</h1>
		<p class="bcu-badge variant-filled-primary">May 10th, 2023</p>
	</div>
	<div class="w-full bcu-card variant-ringed-primary">
		<header class="bcu-card-header">
			<h2 class="text-xl lg:text-2xl xl:text-3xl">May 10th, 2023</h2>
		</header>

		<!-- Events -->
		<section class="grid grid-cols-[1fr_1fr] gap-8 px-8 my-8 overflow-y-auto md:gap-16 md:my-16">
			<ScheduleCard title="Talk Title 1" desc="A very interesting talk title about something." />
			<ScheduleCard title="Talk Title 2" desc="A very interesting talk title about something." />
			<ScheduleCard title="Talk Title 3" desc="A very interesting talk title about something." />
			<ScheduleCard title="Talk Title 4" desc="A very interesting talk title about something." />
			<ScheduleCard title="Talk Title 5" desc="A very interesting talk title about something." />
			<ScheduleCard title="Talk Title 6" desc="A very interesting talk title about something." />
			<ScheduleCard title="Talk Title 7" desc="A very interesting talk title about something." />
		</section>
	</div>
</LayoutWrapper>
