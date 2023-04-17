<script lang="ts">
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
	import CallForSponsorsCard from '$lib/components/CallForSponsorsCard.svelte';
</script>

<LayoutWrapper>
	<div class="lg:max-w-6xl flex flex-col gap-8">
		<h1>Sponsorships</h1>
		<CallForSponsorsCard />
	</div>
</LayoutWrapper>
