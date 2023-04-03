<script lang="ts">
	import { modeCurrent } from '@codingcatdev/blackcatui';
	import LightBanner from '$lib/assets/B-IOE23-WebBanner-2560x500.png';
	import DarkBanner from '$lib/assets/C-IOE23-WebBanner-2560x500.png';
</script>

<div class="flex flex-col gap-2 m-2 md:m-8 md:gap-12">
	{#if $modeCurrent}
		<img src={LightBanner} alt="IO Extended Banner" />
	{:else}
		<img src={DarkBanner} alt="IO Extended Bannder" />
	{/if}
	<section><h1>Welcome to Google I/O Extended 2023 - Grand Rapids</h1></section>
	<section>
		Your ticket to Google I/O Extended - Grand Rapids Includes
		<ul>
			<li>Thing 1</li>
			<li>Thing 2</li>
		</ul>
	</section>
	<section>
		<h2>Sponsors</h2>
		<p>Details about <a href="/sponsors">View All Sponsors</a></p>
	</section>
	<section>
		<h2>Speakers</h2>
		<p>Details about <a href="/speakers">View All Speakers</a></p>
	</section>
</div>
