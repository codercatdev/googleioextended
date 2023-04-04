import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getSpeaker, getSpeakerSchedule } from '$lib/data/functions';


export const load = (({ params }) => {
  const speaker = getSpeaker(params.slug)
  if (!speaker) throw error(404, 'Not found');

  const speakerSchedule = getSpeakerSchedule(speaker.slug);
  return { speakerSchedule, speaker };
}) satisfies PageLoad;