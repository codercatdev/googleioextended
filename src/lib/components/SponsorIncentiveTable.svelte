<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { CheckCircle } from '@steeze-ui/heroicons';
</script>

<div class="grid-container text-sm">
	<div class="grid-item grid-header">Sponsorship Opportunities</div>
	<div class="grid-item grid-header">Diamond* $5,000</div>
	<div class="grid-item grid-header">Gold $2,500</div>
	<div class="grid-item grid-header">Silver $1,000</div>
	<div class="grid-item grid-header">Bronze $500</div>
	<div class="grid-item">
		You are GDG GR's cornerstone partner. We'll work with you through 2023. After party is sponsored
		in your name.
	</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
	</div>
	<div class="grid-item" />
	<div class="grid-item" />
	<div class="grid-item" />
	<div class="grid-item">
		Dedicated stage time at Google I/O Extended. You will be incorporated into the keynote sessions.
	</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
	</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-secondary-500" />
	</div>
	<div class="grid-item" />
	<div class="grid-item" />
	<div class="grid-item">Permits signage and other branding to placed in the sponsored area.</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
	</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-secondary-500" />
	</div>
	<div class="grid-item" />
	<div class="grid-item" />
	<div class="grid-item">
		Option to have an attendee amenity (eg. coffee, snacks, lunch) sponsored in your name.
	</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
	</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-secondary-500" />
	</div>
	<div class="grid-item" />
	<div class="grid-item" />
	<div class="grid-item justify-self-start">Table and two chairs in Expo area.</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
	</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-secondary-500" />
	</div>
	<div class="grid-item"><Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 " /></div>
	<div class="grid-item" />
	<div class="grid-item justify-self-start">
		Logo on GDG GR meetup site, website and promotional material.
	</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
	</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-secondary-500" />
	</div>
	<div class="grid-item"><Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 " /></div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-amber-800" />
	</div>
	<div class="grid-item justify-self-start">
		Mentions in all forms of digital marketing/social media.
	</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
	</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-secondary-500" />
	</div>
	<div class="grid-item"><Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 " /></div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-amber-800" />
	</div>
	<div class="grid-item justify-self-start">
		Option to sponsor a giveaway at the event. Stage time to raffle off any cool gifts you bring.
	</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
	</div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-secondary-500" />
	</div>
	<div class="grid-item"><Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 " /></div>
	<div class="grid-item">
		<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-amber-800" />
	</div>
</div>
<small>* One sponsorship available on a first come first serve basis</small>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
		grid-gap: 10px;
		max-width: 72rem;
	}

	.grid-item {
		padding: 0.5rem;
		text-align: left;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.grid-header {
		font-weight: bold;
	}

	/* Media query for smaller screens */
	@media screen and (max-width: 768px) {
		.grid-item {
			text-align: left;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 2px;
		}
	}
</style>
