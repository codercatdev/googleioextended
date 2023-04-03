<script>
	export let title = 'Event';
	export let desc = 'Svelte Talk';
	export let slug = 'event';
	export let fromTime = Date.now();
	export let toTime = Date.now() + 3600000;

	$: fromDate = `${new Date(fromTime).toLocaleTimeString()}`;
	$: toDate = `${new Date(toTime).toLocaleTimeString()}`;
</script>

<div class="bcu-card variant-ghost-surface">
	<a class="!no-underline !text-token" href={`/schedule/${slug}`}>
		<header class="bcu-card-header">
			<h3 class="text-xl lg:text-2xl xl:text-3xl">{title}</h3>
		</header>
		<section class="p-4">
			<p>{desc}</p>
		</section>
		<footer class="bcu-card-footer">
			<p class="text-xs">{`${fromDate} - ${toDate}`}</p>
		</footer>
	</a>
</div>
