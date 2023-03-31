<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bars3, Swatch, GlobeAmericas } from '@steeze-ui/heroicons';

	// BlackCatUI
	import {
		AppBar,
		LightSwitch,
		popup,
		drawerStore,
		type DrawerSettings
	} from '@codingcatdev/blackcatui';

	// Drawer Handler
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}
</script>

<!-- NOTE: using stopPropagation to override Chrome for Windows search shortcut -->
<!-- <svelte:window on:keydown|stopPropagation={onWindowKeydown} /> -->

<AppBar shadow="shadow-xl">
	<svelte:fragment slot="bcu-app-bar-lead">
		<div class="flex items-center gap-2">
			<!-- Hamburger Menu -->
			<button on:click={drawerOpen} class="w-10 lg:!hidden" aria-label="Open Drawer">
				<Icon src={Bars3} theme="solid" />
			</button>
			<!-- Logo -->
			<!-- <a class="lg:!ml-0 w-12 lg:w-16 overflow-hidden" href="/" title="Go to Homepage">
				<AjAlt />
			</a> -->
			<!-- Title -->
			<a
				class="text-primary-700 dark:text-primary-500 hover:brightness-110 hidden sm:block sm:text-xl md:text-3xl"
				href="/"
			>
				Google I/O Extended - Grand Rapids
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="bcu-app-bar-trail">
		<!-- Theme -->
		<div>
			<LightSwitch />
		</div>

		<!-- Social -->
		<!-- prettier-ignore -->
		<section class="hidden sm:inline-flex sm:gap-2">
			<a class="bcu-button-icon hover:variant-soft-primary" href="https://gdggr.org" target="_blank" rel="noreferrer">
				<Icon src={GlobeAmericas} theme="solid" />
			</a>
		</section>
	</svelte:fragment>
</AppBar>
