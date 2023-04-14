<script lang="ts">
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
	import CallForSponsorsCard from '$lib/components/CallForSponsorsCard.svelte';
</script>

<LayoutWrapper>
	<div class="flex m-2 md:m-8 justify-center">
		<div class="flex flex-col gap-2 md:gap-12 max-w-6xl">
			<div class="flex gap-2 self-center text-center md:gap-8">
				<h1>Sponsorships</h1>
			</div>
			<CallForSponsorsCard />
			<div class="flex m-2 md:m-8 justify-center">
				<div class="flex flex-col gap-2 md:gap-12 max-w-6xl" />
			</div>
		</div>
	</div></LayoutWrapper
>
