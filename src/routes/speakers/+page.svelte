<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
	import CallForSpeakersCard from '$lib/components/CallForSpeakersCard.svelte';
	import KnickerbockerSpeaker from '$lib/assets/knickerbockerspeaker.jpeg';
	import Speakers from '$lib/components/Speakers.svelte';
</script>

<LayoutWrapper>
	<h1>Speakers</h1>
	<div class="flex flex-col xl:flex-row gap-4">
		<div class="xl:max-w-3xl">
			<CallForSpeakersCard />
		</div>
		<img
			class="xl:max-w-2xl rounded-lg aspect-video object-cover"
			src={KnickerbockerSpeaker}
			alt="Knickerbocker Speaker Google I/O Extended 2018"
		/>
	</div>

	<Speakers speakers={data.speakers} />
</LayoutWrapper>
