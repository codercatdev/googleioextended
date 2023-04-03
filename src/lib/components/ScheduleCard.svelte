<script>
	export let title = 'Event';
	export let desc = 'Svelte Talk';
	export let slug = 'event';
	export let fromTime = Date.now();
	export let toTime = Date.now() + 3600000;

	$: fromDate = `${new Date(fromTime).toLocaleTimeString()}`;
	$: toDate = `${new Date(toTime).toLocaleTimeString()}`;
</script>

<div class="flex flex-col">
	<div class="pl-2 mb-4">
		<span class="text-xl dark:text-primary-500">{`${fromDate} - ${toDate}`}</span>
	</div>
	<div class="bcu-card variant-ghost-surface">
		<a class="!no-underline !text-token" href={`/schedule/${slug}`}>
			<header class="bcu-card-header">
				<h3 class="text-xl lg:text-2xl xl:text-3xl">{title}</h3>
			</header>
			<section class="p-4 opacity-60">
				<p>{desc}</p>
			</section>
		</a>
	</div>
</div>
