<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Github, Twitter } from '@steeze-ui/simple-icons';
	import { DocumentCheck } from '@steeze-ui/heroicons';
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
</script>

<footer class="md:m-12 md:gap-16">
	<section
		class="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:space-y-0"
	>
		<p class="text-xs">
			<a class="bcu-button variant-soft" href="https://codingcat.dev"
				>Made with 💜 by CodingCat.dev</a
			>
		</p>
		<div class="flex gap-2">
			<a
				class="bcu-button variant-soft"
				href="https://developers.google.com/community-guidelines"
				target="_blank"
				rel="noreferrer"
			>
				<Icon src={DocumentCheck} class="w-8" />
				<span class="hidden md:inline-block ml-2">Community Guidelines</span>
			</a>
		</div>
		<div class="flex gap-2">
			<a
				class="bcu-button variant-soft"
				href="https://github.com/codercatdev/googleioextended"
				target="_blank"
				rel="noreferrer"
			>
				<Icon src={Github} class="w-8" />
				<span class="hidden md:inline-block ml-2">GitHub</span>
			</a>
			<a
				class="bcu-button variant-soft"
				href="https://twitter.com/gdg_grandrapids"
				target="_blank"
				rel="noreferrer"
			>
				<Icon src={Twitter} class="w-8" />
				<span class="hidden md:inline-block ml-2">Twitter</span>
			</a>
		</div>
	</section>
</footer>
