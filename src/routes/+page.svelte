<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import { modeCurrent } from '@codingcatdev/blackcatui';
	import LightBanner from '$lib/assets/B-IOE23-WebBanner-2560x500.png';
	import DarkBanner from '$lib/assets/C-IOE23-WebBanner-2560x500.png';

	// Components
	import TicketCard from '$lib/components/TicketCard.svelte';
	import CallForSpeakersCard from '$lib/components/CallForSpeakersCard.svelte';
	import Speakers from '$lib/components/Speakers.svelte';
	import Video from '$lib/components/Video.svelte';
</script>

<div class="flex m-2 md:m-8 justify-center">
	<div class="flex flex-col gap-2 md:gap-12 max-w-6xl">
		{#if $modeCurrent}
			<img src={LightBanner} alt="IO Extended Banner" />
		{:else}
			<img src={DarkBanner} alt="IO Extended Bannder" />
		{/if}
		<section class="flex flex-col gap-2 md:gap-4">
			<h1>Welcome to Google I/O Extended 2023 - Grand Rapids</h1>
			<span class="font-bold"> Join us for Google I/O Extended 2023 in Grand Rapids! </span>
			Google I/O Extended is a series of community-led tech meetups that bring the knowledge and excitement
			of Google I/O to developers on a city level, all around the globe. This year, we're excited to
			be hosting Google I/O Extended in Grand Rapids on May 10, 2023. We'll have a full day of technical
			talks, hands-on learning with Google experts, and opportunities to meet other developers in the
			area.

			<span class="font-bold"> What to expect: </span>
			Technical talks from Google experts on the latest developer products and technologies Hands-on
			learning labs where you can get hands-on with Google's latest developer tools Opportunities to
			meet other developers in the area and network A chance to win prizes from Google

			<span class="font-bold">Who should attend:</span>
			Developers of all levels Anyone interested in learning more about Google's developer products and
			technologies Anyone who wants to connect with other developers in the area Registration: Registration
			is now open! Register today to secure your spot at Google I/O Extended 2023 in Grand Rapids. We
			hope to see you there!
		</section>
		<!-- <section class="flex flex-col gap-8">
			<h2>Tickets</h2>
			<TicketCard />
		</section> -->
		<section class="flex flex-col gap-8">
			<h2>2023 Presentations</h2>

			<Video src="https://youtu.be/saoCvgYZFMw" title="Scrum is not a silver bullet" />
			<Video
				src="https://youtu.be/Scov7np8miM"
				title="Lightning Fast Webapps on the Serverless Cloud"
			/>
			<Video
				src="https://youtu.be/FMArgdTb54Q"
				title="Design Systems: Baking Consistency into your Workflow"
			/>
			<Video src="https://youtu.be/Ob_CDxNDcB4" title="Forces Shaping AI You Might Not Realize" />
			<Video src="https://youtu.be/XqHh5wr3ZdM" title="The Velocity Trap" />
			<Video src="https://youtu.be/a3_6X5q-cQA" title="Developing with a Design Mindset" />

			<!-- <CallForSpeakersCard /> -->
			<!-- <Speakers speakers={data.speakers} /> -->
			<div class="flex flex-col gap-2 md:gap-8 items-center justify-center">
				<a href="/schedule" class="bcu-button variant-filled-primary">{`See Full Schedule ->`}</a>
				<a href="/speakers" class="bcu-button variant-filled-secondary">{`Speakers ->`}</a>
				<a href="/sponsors" class="bcu-button variant-filled-tertiary">{`Become a Sponsor ->`}</a>
			</div>
		</section>
	</div>
</div>
