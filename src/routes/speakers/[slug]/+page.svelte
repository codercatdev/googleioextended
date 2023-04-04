<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
	import { Avatar } from '@codingcatdev/blackcatui';

	const { speakerSchedule, speaker } = data;
</script>

<LayoutWrapper>
	<a class="bcu-button variant-filled-secondary" href="/schedule">{`<-`} Back to Speakers</a>

	<div class="flex flex-col gap-8 bcu-card p-8 variant-ringed-secondary">
		<div class="flex gap-8">
			{#if speaker?.pic}
				<Avatar src={speaker?.pic} alt={`Photo of ${speaker.name}`} />
			{:else}
				<Avatar>
					<svelte:fragment slot="bcu-avatar-message">{speaker?.name.at(0)}</svelte:fragment>
				</Avatar>
			{/if}
			<div class="flex flex-col text-2xl justify-center">
				<h1>{speaker?.name}</h1>
				<div>{speaker?.title}</div>
			</div>
		</div>
	</div>

	{#each speakerSchedule as schedule}
		<div class="bcu-card max-w-5xl p-8 variant-ringed-primary">
			<section class="flex flex-col gap-8">
				<div class="pl-2 mb-4">
					<span class="text-xl dark:text-primary-500"
						>{`${new Date(schedule.fromTime).toLocaleTimeString()} - ${new Date(
							schedule.toTime
						).toLocaleTimeString()}`}</span
					>
				</div>
				<h1 class="font-bold">{schedule.title}</h1>
				<div class="text-lg xl:text-xl opacity-80">{schedule.summary}</div>
			</section>
		</div>
	{/each}
</LayoutWrapper>
