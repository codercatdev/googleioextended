<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
	import ScheduleCard from '$lib/components/ScheduleCard.svelte';
</script>

<LayoutWrapper>
	<div class="flex m-2 md:m-8 justify-center">
		<div class="flex flex-col gap-2 md:gap-12 max-w-6xl">
			<div class="flex gap-2 md:gap-8">
				<h1>Schedule for Google I/O Extended - Grand Rapids</h1>
				<p class="bcu-badge variant-filled-primary">May 10th, 2023</p>
			</div>
			<div class="bcu-alert variant-filled-secondary text-lg">
				⚠ This agenda is not final! All times, events, and speakers may (and most likely will)
				change. ⚠
			</div>
			<div class="w-full bcu-card">
				<header class="bcu-card-header">
					<h2 class="text-xl lg:text-2xl xl:text-3xl">May 10th, 2023</h2>
				</header>

				<!-- Events -->
				<section
					class="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 px-8 my-8 overflow-y-auto md:gap-16 md:my-16"
				>
					{#each data.schedules as schedule}
						<ScheduleCard
							title={schedule.title}
							summary={schedule.summary}
							fromTime={schedule.fromTime}
							toTime={schedule.toTime}
							slug={schedule.slug}
						/>
					{/each}
				</section>
			</div>
		</div>
	</div>
</LayoutWrapper>
