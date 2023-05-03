<script lang="ts">
	import type { Schedule } from '$lib/data/functions';

	export let title = 'Event';
	export let summary = 'Svelte Talk';
	export let slug = '';
	export let authorSlug = '';
	export let fromTime = Date.now();
	export let toTime = Date.now() + 3600000;
	export let stage = 'main';
	export let remote = false;
	export let speaker: Schedule['speaker'];

	$: fromDate = `${new Date(fromTime).toLocaleTimeString()}`;
	$: toDate = `${new Date(toTime).toLocaleTimeString()}`;
</script>

<div class="flex flex-col">
	<div class="pl-2 mb-4">
		<span class="text-xl dark:text-primary-500">{`${fromDate} - ${toDate}`}</span>
	</div>
	<div class="bcu-card variant-ringed-primary">
		<a class="!no-underline !text-token" href={`/schedule/${slug}`}>
			<header class="bcu-card-header relative">
				<h3 class="text-xl lg:text-2xl xl:text-3xl">{title}</h3>
				<div class="py-4 flex gap-1">
					{#if stage === 'main'}
						<span class="bcu-badge variant-ghost-primary">{`Stage: ${stage}`}</span>
					{:else}
						<span class="bcu-badge variant-ghost-tertiary">{`Stage: ${stage}`}</span>
					{/if}
					{#if remote}
						<span class="bcu-badge variant-ghost-warning">Remote</span>
					{/if}
				</div>
				{#if speaker}
					<div class="flex gap-2">
						<div
							class="bcu-avatar w-8 h-8 flex relative items-center justify-center shrink-0 overflow-hidden variant-filled text-center object-cover text-transparent"
							aria-label=""
							aria-labelledby=""
						>
							<img src={speaker.pic} alt={speaker.name} />
						</div>
						<div class="flex flex-col text-2xl justify-center">
							{speaker.name}
						</div>
					</div>
				{/if}
			</header>
			<section class="p-4 opacity-60">
				<p>{summary}</p>
			</section>
		</a>
	</div>
</div>
