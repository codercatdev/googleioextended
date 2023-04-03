<script lang="ts">
	// Core
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { storeCurrentUrl } from '../stores';

	import type { LayoutData } from './$types';

	//Style
	import '../app.postcss';

	// BlackCatUI Components
	import { AppShell } from '@codingcatdev/blackcatui';

	// GoogleIOExtended Components
	import MyAppBar from '../lib/components/MyAppBar.svelte';
	import MySideNav from '../lib/components/MySideNav.svelte';
	import MyDrawer from '../lib/components/MyDrawer.svelte';

	// Scroll heading into view
	function scrollHeadingIntoView(): void {
		if (!window.location.hash) return;
		const elemTarget: HTMLElement | null = document.querySelector(window.location.hash);
		if (elemTarget) elemTarget.scrollIntoView({ behavior: 'smooth' });
	}

	// Lifecycle
	afterNavigate((params: any) => {
		// Store current page route URL
		storeCurrentUrl.set($page.url.pathname);
		// Scroll to top
		const isNewPage: boolean =
			params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#bcu-app-shell-page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
		// Scroll heading into view
		scrollHeadingIntoView();
	});

	// SEO Metatags
	const metaDefaults = {
		title: 'Google I/O Extended Grand Rapids',
		description: 'Google I/O Extended Grand Rapids',
		image:
			'https://media.codingcat.dev/image/upload/f_jpg/dev-codingcatdev-photo/v60h88eohd7ufghkspgo'
	};
	const meta = {
		title: metaDefaults.title,
		description: metaDefaults.description,
		image: metaDefaults.image,
		// Article
		article: { publishTime: '', modifiedTime: '', author: '' },
		// Twitter
		twitter: {
			title: metaDefaults.title,
			description: metaDefaults.description,
			image: metaDefaults.image
		}
	};
	page.subscribe((page) => {
		// Restore Page Defaults
		meta.title = metaDefaults.title;
		meta.description = metaDefaults.description;
		meta.image = metaDefaults.image;
		// Restore Twitter Defaults
		meta.twitter.title = metaDefaults.title;
		meta.twitter.description = metaDefaults.description;
		meta.twitter.image = metaDefaults.image;
	});
</script>

<svelte:head>
	<title>{meta.title}</title>
	<!-- Meta Tags -->
	<meta name="title" content={meta.title} />
	<meta name="description" content={meta.description} />
	<meta name="keywords" content="google, io, extended, grand rapids" />
	<meta name="theme-color" content="#313276" />
	<meta name="author" content="CodingCatDev, LLC" />
	<!-- Open Graph - https://ogp.me/ -->
	<meta property="og:site_name" content="Google I/O Extended - Grand Rapids" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.googleioextended.com{$page.url.pathname}" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:image:secure_url" content={meta.image} />
	<meta property="og:image:type" content="image/jpg" />
	<meta property="og:image:width" content="1920" />
	<meta property="og:image:height" content="1080" />

	<!-- Open Graph: Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@gdg_grandrapids" />
	<meta name="twitter:creator" content="@gdg_grandrapids" />
	<meta name="twitter:title" content={meta.twitter.title} />
	<meta name="twitter:description" content={meta.twitter.description} />
	<meta name="twitter:image" content={meta.twitter.image} />
</svelte:head>

<!-- Overlays -->
<MyDrawer />

<!-- App Shell -->
<AppShell regionPage="overflow-y-scroll" slotPageFooter="pt-4 bg-surface-50-900-token" }>
	<!-- Header -->
	<svelte:fragment slot="bcu-app-shell-header"><MyAppBar /></svelte:fragment>

	<!-- Sidebar (Left) -->
	<!-- <svelte:fragment slot="bcu-app-shell-sidebar-left">
		<MySideNav class="hidden overflow-hidden lg:grid w-72" />
	</svelte:fragment> -->

	<!-- Page Content -->
	<slot />

	<!-- Page Footer -->
	<svelte:fragment slot="bcu-app-shell-page-footer">Footer</svelte:fragment>
</AppShell>
