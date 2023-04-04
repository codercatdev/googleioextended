<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { CheckCircle } from '@steeze-ui/heroicons';
</script>

<div class="w-full bcu-card variant-ringed-tertiary">
	<header class="bcu-card-header">
		<h2 class="text-xl lg:text-2xl xl:text-3xl">Sponsorship Information 2023</h2>
	</header>

	<!-- Events -->
	<section class="flex flex-col p-6 gap-8">
		<h3>About Google Developers Group Grand Rapids</h3>
		<p class="md:!text-2xl">
			Google Developer Groups (GDGs) are for developers who are interested in Google's development
			technology; everything from Android, App Engine, and Google Chrome platforms, to product APIs
			like the Maps API, YouTube API and Google Calendar API. A GDG can take many forms -- from just
			a few people getting together to watch the latest video, to large gatherings with demos and
			tech talks, to events like code sprints and hackathons. However, at the core, GDGs are focused
			on developers and technical content, with a target audience of developers. This group is the
			Grand Rapids, MI chapter!
		</p>
		<h3>GDG GR Product Offering</h3>
		<ul class="md:!text-2xl">
			<li>📅 Google I/O Extended Grand Rapids 2023</li>
			<li>🍕 Lunch and Code Meetups</li>
			<li>🧑‍🤝‍🧑 Strategic Partnerships</li>
		</ul>

		<div>
			<span class="font-bold">Google I/O Extended Grand Rapids 2023</span> is the local extension of
			an annual developer/consumer conference held by Google in Mountain View, California. Google I/O
			features highly technical, in-depth sessions focused on building cloud, web, mobile, and enterprise
			applications with Google and open web technologies. Google I/O Extended will feature live video
			streams provided by Google, supplemented by live speakers and vendors.
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
		<div class="bcu-table-container">
			<table class="bcu-table">
				<thead>
					<th>Sponsorship Opportunities</th>
					<th>Diamond* $5,000</th>
					<th>Gold $2,500</th>
					<th>Silver $1,000</th>
				</thead>
				<tbody>
					<tr>
						<td>
							You are the GDG GR cornerstone partner. We will work with you throughout the 2023
							year. After party sponsorship in your name.
						</td>
						<td>
							<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
						</td>
						<td />
						<td />
					</tr>
					<tr>
						<td>
							Dedicated stage time at Google I/O Extended. You will be incorporated into the keynote
							sessions.
						</td>
						<td>
							<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
						</td>
						<td>
							<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-secondary-500" />
						</td>
						<td />
					</tr>
					<tr>
						<td>
							Option to have an attendee amenity (eg. coffee, snacks, lunch) sponsored in your name.
						</td>
						<td>
							<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
						</td>
						<td>
							<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-secondary-500" />
						</td>
						<td />
					</tr>
					<tr>
						<td> Logo on GDG GR meetup site, website and promotional material. </td>
						<td>
							<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
						</td>
						<td>
							<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-secondary-500" />
						</td>
						<td> <Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-token" /> </td>
					</tr>
					<tr>
						<td> Mentions in all forms of digital marketing/social media. </td>
						<td>
							<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
						</td>
						<td>
							<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-secondary-500" />
						</td>
						<td> <Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-token" /> </td>
					</tr>
					<tr>
						<td>
							Option to sponsor a giveaway at the event. Stage time to raffle off any cool gifts you
							bring.
						</td>
						<td>
							<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-primary-500" />
						</td>
						<td>
							<Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 text-secondary-500" />
						</td>
						<td> <Icon src={CheckCircle} theme="solid" class="w-8 md:w-12 " /> </td>
					</tr>
				</tbody>
			</table>
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
</div>
