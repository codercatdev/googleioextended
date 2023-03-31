<script lang="ts">
	// Stores
	import { storeCurrentUrl } from '../stores';
	import { drawerStore } from '@codingcatdev/blackcatui';

	// Props
	export let embedded = false;

	// ListItem Click Handler
	function onListItemClick(): void {
		// On Drawer embed Only:
		if (!embedded) return;
		drawerStore.close();
	}

	$: classesBase = `p-4 pb-20 space-y-4 overflow-y-auto ${$$props.class ?? ''}`;
	$: classesActive = (href: string) =>
		$storeCurrentUrl?.split('/').at(-1) === href ? 'bg-primary-active-token' : '';
</script>

<!-- Nav Links -->
<section class={classesBase}>
	<nav class="nav-list-nav">
		<ul>
			<li on:click={onListItemClick} on:keypress>
				<a
					href={`/sponsors`}
					class={classesActive('/sponsors')}
					data-sveltekit-preload-data="hover"
				>
					<span class="flex-auto text-3xl font-bold">Sponsors</span>
				</a>
			</li>
		</ul>
	</nav>
</section>
