<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
	import { Avatar } from '@codingcatdev/blackcatui';

	const { schedule, speaker } = data;
	$: fromDate = `${new Date(schedule.fromTime).toLocaleTimeString()}`;
	$: toDate = `${new Date(schedule.toTime).toLocaleTimeString()}`;
</script>

<LayoutWrapper>
	<a class="bcu-button" href="/schedule">{`<-`} Back to Schedule</a>
	<section class="flex flex-col gap-8">
		<div class="pl-2 mb-4">
			<span class="text-xl dark:text-primary-500">{`${fromDate} - ${toDate}`}</span>
		</div>
		<h1 class="font-bold">{schedule.title}</h1>
		<div class="text-lg xl:text-xl opacity-80">{schedule.summary}</div>

		<h2 class="font-bold">Description</h2>
		<div class="text-xl xl:text-2xl">
			{schedule.body}
		</div>

		<div class="flex flex-col gap-8 bcu-card p-8">
			<h2>Author</h2>
			<div class="flex gap-8">
				{#if speaker?.pic}
					<Avatar src={speaker?.pic} alt={`Photo of ${speaker.name}`} />
				{:else}
					<Avatar>
						<svelte:fragment slot="bcu-avatar-message">{speaker?.name.at(0)}</svelte:fragment>
					</Avatar>
				{/if}
				<div class="flex flex-col text-2xl justify-center">
					<a href={`/speakers/${speaker?.slug}`}> {speaker?.name}</a>
					<div>{speaker?.title}</div>
				</div>
			</div>
		</div>
	</section>
</LayoutWrapper>
