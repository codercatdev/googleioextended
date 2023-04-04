<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
	import CallForSpeakersCard from '$lib/components/CallForSpeakersCard.svelte';
	import { Avatar } from '@codingcatdev/blackcatui';
</script>

<LayoutWrapper>
	<div class="flex gap-2 md:gap-8">
		<h1>Speakers</h1>
	</div>
	<CallForSpeakersCard />

	{#each data.speakers as speaker}
		<a class="!text-secondary-500 !no-underline" href={`/speakers/${speaker?.slug}`}>
			<div class="flex flex-col gap-8 bcu-card variant-ringed-secondary p-8">
				<div class="flex gap-8">
					{#if speaker?.pic}
						<Avatar src={speaker?.pic} alt={`Photo of ${speaker.name}`} />
					{:else}
						<Avatar>
							<svelte:fragment slot="bcu-avatar-message">{speaker?.name.at(0)}</svelte:fragment>
						</Avatar>
					{/if}
					<div class="flex flex-col text-2xl justify-center">
						<div>{speaker?.name}</div>
						<div>{speaker?.title}</div>
					</div>
				</div>
			</div>
		</a>
	{/each}
</LayoutWrapper>
