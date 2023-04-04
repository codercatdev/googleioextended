<script lang="ts">
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
	import CallForSpeakersCard from '$lib/components/CallForSpeakersCard.svelte';
</script>

<LayoutWrapper>
	<div class="flex gap-2 md:gap-8">
		<h1>Speakers</h1>
	</div>
	<CallForSpeakersCard />
</LayoutWrapper>
