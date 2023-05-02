<script lang="ts">
	import { Avatar } from '@codingcatdev/blackcatui';
	export let speakers: any = [];
</script>

<div class="flex flex-col gap-2 md:gap-8">
	{#each speakers as speaker}
		<a class="!text-primary-500 !no-underline" href={`/speakers/${speaker?.slug}`}>
			<div class="flex flex-col gap-8 bcu-card variant-ringed-primary p-8">
				<div class="flex gap-8">
					{#if speaker?.pic}
						<Avatar src={speaker?.pic} alt={`Photo of ${speaker.name}`} />
					{:else}
						<Avatar>
							<svelte:fragment slot="bcu-avatar-message">{speaker?.name.at(0)}</svelte:fragment>
						</Avatar>
					{/if}
					<div class="flex flex-col text-2xl justify-center">
						<div>{speaker?.name}</div>
						<div>{speaker?.title}</div>
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>
