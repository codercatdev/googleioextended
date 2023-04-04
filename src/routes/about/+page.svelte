<script lang="ts">
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
	import NewHolland from '$lib/assets/newholland.png';
</script>

<LayoutWrapper>
	<section class="flex flex-col w-full gap-8">
		<h1>About</h1>
		<div>
			<span class="text-xl font-bold">Google I/O Extended - GDG Grand Rapids</span>
			is a one-day event that will bring the excitement of Google I/O to Grand Rapids. The event will
			feature a keynote address, technical sessions, and networking opportunities. The keynote address
			will be delivered by a Google engineer and will provide an overview of the latest Google technologies.
			The technical sessions will cover a variety of topics, including artificial intelligence, machine
			learning, cloud computing, mobile development, and web development. The networking opportunities
			will allow attendees to connect with other developers, designers, entrepreneurs, and educators.
			Google I/O Extended - GDG Grand Rapids is a great opportunity for anyone interested in learning
			more about Google technology. Here are some of the benefits of attending Google I/O Extended -
			GDG Grand Rapids: Learn about the latest Google technologies Network with other developers, designers,
			entrepreneurs, and educators Get inspired by the keynote address Take part in technical sessions
			Have fun! We hope to see you there!
		</div>
	</section>

	<section class="flex flex-col w-full gap-8">
		<h2>Location</h2>
		<a
			href="https://www.newhollandbrew.com/location/grand-rapids/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={NewHolland} alt="New Holland Knickberbocker Grand Rapids" />
		</a>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.3592395399023!2d-85.6798046!3d42.970705699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819add6cc059b71%3A0x198c23b6d2aeaa87!2s417%20Bridge%20St%20NW%2C%20Grand%20Rapids%2C%20MI%2049504!5e0!3m2!1sen!2sus!4v1680620515232!5m2!1sen!2sus"
			width="600"
			height="450"
			style="border:0;"
			allowfullscreen={undefined}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="Map of New Holland Grand Rapids"
		/>
		<div>We will be upstairs for our event.</div>
	</section>

	<section class="flex flex-col w-full gap-8">
		<h2>Google I/O - 2022</h2>
		<div class="video-container">
			<iframe
				class="video"
				title="Google I/O Video 2022"
				src="https://www.youtube.com/embed/CWTm0ccfZe4"
				frameborder="0"
				allowfullscreen
			/>
		</div>
	</section>
</LayoutWrapper>

<style>
	.video-container {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%;
	}
	.video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}
</style>
