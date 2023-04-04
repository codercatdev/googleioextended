<script lang="ts">
	import { modeCurrent } from '@codingcatdev/blackcatui';
	import LightBanner from '$lib/assets/B-IOE23-WebBanner-2560x500.png';
	import DarkBanner from '$lib/assets/C-IOE23-WebBanner-2560x500.png';

	// Components
	import TicketCard from '$lib/components/TicketCard.svelte';
	import CallForSpeakersCard from '$lib/components/CallForSpeakersCard.svelte';
</script>

<div class="flex flex-col gap-2 m-2 md:m-8 md:gap-12">
	{#if $modeCurrent}
		<img src={LightBanner} alt="IO Extended Banner" />
	{:else}
		<img src={DarkBanner} alt="IO Extended Bannder" />
	{/if}
	<section><h1>Welcome to Google I/O Extended 2023 - Grand Rapids</h1></section>
	<section class="flex flex-col gap-8">
		<h2>Tickets</h2>
		<TicketCard />
	</section>
	<section class="flex flex-col gap-8">
		<h2>Speakers</h2>
		<CallForSpeakersCard />
	</section>
</div>
