<script lang="ts">
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
	import TicketCard from '$lib/components/TicketCard.svelte';
</script>

<LayoutWrapper>
	<div class="flex m-2 md:m-8 justify-center">
		<div class="flex flex-col gap-2 md:gap-12 max-w-6xl">
			<h1>Ticket for Google I/O Extended - Grand Rapids</h1>
			<TicketCard />
		</div>
	</div>
</LayoutWrapper>
