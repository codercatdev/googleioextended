<script lang="ts">
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
	import CallForSponsorsCard from '$lib/components/CallForSponsorsCard.svelte';
	import NewCallForSponsorsCard from '$lib/components/NewCallForSponsorsCard.svelte';
</script>

<LayoutWrapper>
	<div class="flex flex-col gap-8 max-w-full">
		<h1>Sponsorships</h1>
		<NewCallForSponsorsCard />
	</div>
</LayoutWrapper>
