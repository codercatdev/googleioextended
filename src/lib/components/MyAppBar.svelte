<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bars3, GlobeAmericas } from '@steeze-ui/heroicons';

	// BlackCatUI
	import { AppBar, LightSwitch, drawerStore, type DrawerSettings } from '@codingcatdev/blackcatui';
	import LogoIo from './LogoIO.svelte';

	// Drawer Handler
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}

	import { storeCurrentUrl } from '../../stores';

	$: classesActive = (href: string) =>
		$storeCurrentUrl?.split('/').at(-1) === href ? 'bg-primary-active-token' : '';
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
			<a class="hidden hover:brightness-110 xl:flex xl:gap-1 sm:text-xl md:text-3xl" href="/">
				Google <span class="text-primary-500">I</span>/<span class="text-primary-500">O</span>
				Extended - <span class="bcu-badge variant-filled-primary">Grand Rapids</span>
			</a>
			<a class="block xl:hidden" href="/">
				<div class="w-12">
					<LogoIo />
				</div>
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="bcu-app-bar-trail">
		<div class="hidden lg:block">
			<a
				href="/tickets"
				class={`bcu-button hover:variant-soft-primary ${classesActive('tickets')}`}
			>
				Tickets
			</a>
			<a
				href="/schedule"
				class={`bcu-button hover:variant-soft-primary ${classesActive('schedule')}`}
			>
				Schedule
			</a>
			<a
				href="/speakers"
				class={`bcu-button hover:variant-soft-primary ${classesActive('speakers')}`}
			>
				Speakers
			</a>
			<a
				href="/sponsors"
				class={`bcu-button hover:variant-soft-primary ${classesActive('sponsors')}`}
			>
				Sponsors
			</a>
			<a href="/about" class={`bcu-button hover:variant-soft-primary ${classesActive('about')}`}>
				About
			</a>
		</div>
		<!-- Theme -->
		<div>
			<LightSwitch />
		</div>

		<!-- Social -->
		<!-- prettier-ignore -->
		<!-- <section class="hidden sm:inline-flex sm:gap-2">
			<a class="bcu-button-icon hover:variant-soft-primary" href="https://gdggr.org" target="_blank" rel="noreferrer">
				<Icon src={GlobeAmericas} theme="solid" />
			</a>
		</section> -->
	</svelte:fragment>
</AppBar>
