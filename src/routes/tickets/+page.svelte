<script lang="ts">
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
</script>

<LayoutWrapper>
	<h1>Ticket for Google I/O Extended - Grand Rapids</h1>

	<div class="max-w-xl bcu-card variant-ringed-primary">
		<header class="bcu-card-header">
			<h2 class="text-xl lg:text-2xl xl:text-3xl">Your Ticket Includes</h2>
		</header>
		<section class="p-4">
			<ul class="flex flex-col gap-8 text-sm lg:text-lg xl:text-xl">
				<li>🎤 Full day of expert speaker sessions online and in person</li>
				<li>
					💃 Afterparty at <a href="https://www.newhollandbrew.com/location/grand-rapids/">
						New Holland Knickerbocker Grand Rapids
					</a>
				</li>
				<li>☕️ Lunch, snack breaks, and all-day coffee / soda provided</li>
				<li>✨ An unforgettable time with the Developer community in Grand Rapids, MI</li>
			</ul>
		</section>
		<footer class="bcu-card-footer">
			<a
				class="w-full bcu-button variant-filled-primary"
				href="https://www.eventbrite.com/e/google-io-extended-grand-rapids-2023-tickets-605068284527"
				target="_blank"
				rel="noopener noreferrer"
			>
				Get Ticket!
			</a>
		</footer>
	</div>
</LayoutWrapper>
