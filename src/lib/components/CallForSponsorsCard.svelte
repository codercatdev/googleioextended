<script lang="ts">
	import SponsorIncentiveTable from './SponsorIncentiveTable.svelte';
</script>

<!-- Events -->

<section class="flex flex-col p-6 gap-8">
	<p class="md:!text-2xl">
		Google Developer Groups (GDGs) are for developers who are interested in Google's development
		technology; everything from Android, App Engine, and Google Chrome platforms, to product APIs
		like the Maps API, YouTube API and Google Calendar API. A GDG can take many forms -- from just a
		few people getting together to watch the latest video, to large gatherings with demos and tech
		talks, to events like code sprints and hackathons. However, at the core, GDGs are focused on
		developers and technical content, with a target audience of developers. This group is the Grand
		Rapids, MI chapter!
	</p>
	<h3>GDG GR Product Offering</h3>
	<ul class="md:!text-2xl">
		<li>📅 Google I/O Extended Grand Rapids 2023</li>
		<li>🍕 Lunch and Code Meetups</li>
		<li>🧑‍🤝‍🧑 Strategic Partnerships</li>
	</ul>

	<div>
		<span class="font-bold">Google I/O Extended Grand Rapids 2023</span> is the local extension of an
		annual developer/consumer conference held by Google in Mountain View, California. Google I/O features
		highly technical, in-depth sessions focused on building cloud, web, mobile, and enterprise applications
		with Google and open web technologies. Google I/O Extended will feature live video streams provided
		by Google, supplemented by live speakers and vendors.
	</div>
	<div>
		<span class="font-bold">Lunch and Code Meetups</span> are social meetups focused on learning and
		of course eating! We may have a topic for the day or let the conversations dictate where we land.
		Topics will vary depending on the attendees.
	</div>
	<div>
		<span class="font-bold">Strategic Partnerships</span> with GDG GR provide support to many events
		in the community focusing on software and digital experiences.
	</div>

	<h3>Google I/O Extended 2023</h3>
	<div />
	<SponsorIncentiveTable />

	<div>
		<a
			class="w-full bcu-button variant-filled-tertiary"
			href="https://forms.gle/aHu6MUUngHvy2qcPA"
			target="_blank"
			rel="noopener noreferrer"
		>
			Become a Sponsor Today
		</a>
	</div>

	<h3>Have Something Else in Mind?</h3>
	<div>
		<span class="font-bold">Propose An Idea</span> If you have an idea of how you’d like to participate
		in sponsorship with our events, let us know what you have in mind. GDG GR marketing reaches over
		500 IT professionals and software designers and developers in the West Michigan area.
	</div>
	<div>
		<span class="font-bold">Thank You</span> Your sponsorship will help fund a nonprofit tech organization
		whose goal is to bring people together to learn and build.
	</div>
	Checks can be written out to GDG Grand Rapids and sent to the following address:
	<div class="flex flex-col gap-1">
		<div>GDG Grand Rapids, XP West Michigan Association</div>
		<div>1034 Wealthy St SE</div>
		<div>Grand Rapids MI 49506</div>
	</div>
	<div>Alternatively we can generate a PayPal Invoice link to pay directly.</div>
</section>
